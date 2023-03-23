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
        const {name, description, link, price} = JSON.parse(req.body);
        if(!name){
            res.status(500).json({message: "Заполните название"})
            return
        }
        if(!link){
            res.status(500).json({message: "Заполните название"})
            return
        }
        if(!price){
            res.status(500).json({message: "Заполните название"})
            return
        }
        if(!description){
            res.status(500).json({message: "Опишите свой гайд"})
            return
        }
        const priceInt = parseInt(price)
        await prisma.item.create({
            data: {
                title: name,
                description: description,
                img: link,
                price: priceInt,
                userId: session.user.id,
            }
        })
        //TODO backend golang send redis or another method
        res.status(200).json("Товар добавлен");
    }
}
