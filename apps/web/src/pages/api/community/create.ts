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
        const {name, description, tags} = JSON.parse(req.body);
        if(!name) {
            res.status(500).json({message: "Вы не ввели название"})
            return
        }
        if(!tags || tags === "0") {
            res.status(500).json({message: "Вы не раздел "})
            return
        }
        if(!description) {
            res.status(500).json({message: "Вы не написали описание "})
            return
        }
        await prisma.post.create({
            data: {
                description: description,
                title: name,
                tagId: tags,
                userId: session.user.id,
            }
        })
        res.status(200).json("Пост успешно создан");
    }
}
