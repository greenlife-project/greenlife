import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prisma/prisma";
import {authOptions} from "@garden/auth";
import {getServerSession} from "next-auth";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions)
    if(!session){
        res.status(500).json({message: "Что надо вам?"})
        return
    }
    if(req.method === "POST") {
        const {name, steps, difficult, description} = JSON.parse(req.body);
        console.log(name)
        if(!name){
            res.status(500).json({message: "Заполните название"})
            return
        }
        if(!difficult){
            res.status(500).json({message: "Заполните cложность"})
            return
        }
        if(!description){
            res.status(500).json({message: "Опишите свой гайд"})
            return
        }
        let checked = true;
        steps.forEach((step: any) => {
            if(step.name.trim().length === 0){
                checked = false;
                return
            }else if(step.link.trim().length === 0){
                checked = false;
                return
            }else if(step.description.trim().length === 0){
                checked = false;
                return
            }
        })
        if(!checked){
            res.status(500).json({message: "Заполните все шаги"})
            return
        }
        console.log(session)
        const guide = await prisma.guide.create({
            data: {
                title: name,
                description: description,
                img: "https://storage.yandexcloud.net/greenlife/Rectangle%201368(2).png",
                userId: session.user.id,
            }
        })
        for (const step of steps) {
            await prisma.stepGuide.create({
                data: {
                    guideId: guide.id,
                    img: step.link,
                    description: step.description,
                    title: step.name,
                }
            })
        }
        //TODO backend golang send redis or another method
        res.status(200).json("Заявка в обработке");
    }
}
