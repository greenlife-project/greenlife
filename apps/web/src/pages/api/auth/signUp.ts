import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "POST"){
        const { phone, password } = req.body;
        if(!phone){
            res.status(501).json({message: "Телефон не введен"});
            return
        }
        if(!password){
            res.status(501).json({message: "Пароль не найден"});
            return
        }
    }else{
        res.status(500).json({message: "Метод не найден"})
    }
}
