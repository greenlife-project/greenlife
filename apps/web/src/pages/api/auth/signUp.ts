import { NextApiRequest, NextApiResponse } from "next";
import {getUserByPhone} from "@/model/user";
import argon2 from "argon2";
import prisma from "@/lib/prisma/prisma"
import {makeid} from "@/utils/utils";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "POST"){
        const { phone, password, first_name, last_name } = req.body;
        if(!phone){
            res.status(501).json({message: "Телефон не введен"});
            return
        }
        if(!password){
            res.status(501).json({message: "Пароль не найден"});
            return
        }
        if(phone.startsWith("8")){
            phone[0] = "7"
        }
        const token = await createUser(phone, password, first_name, last_name );
        if(!token){
            res.status(501).json({message: "Вы уже зарегестрированы"});
            return
        }

        const res_sms = await fetch(
            `https://smsc.ru/sys/send.php?login=${process.env.LOGIN_SMS}&psw=${process.env.PASSWORD_SMS}&phones=${phone}&mes=${encodeURIComponent(`Введите код подтверждения ${token}`)}&call=1`);
        console.log(`https://smsc.ru/sys/send.php?login=
            ${process.env.LOGIN_SMS}
            &psw=${process.env.PASSWORD_SMS}&phones=
            ${phone}&mes=${encodeURI(`Введите код подтверждения ${token}`)}&call=1`)
        if(res_sms.status != 200){
            res.status(501).json({message: "Пока регистрация не доступна"});
            return
        }
        res.status(200).json({message: "Подтвердите аккаунт"});
    }else{
        res.status(500).json({message: "Метод не найден"})
    }
}




const createUser = async ( phone: string, password: string, first_name: string, last_name: string) => {
    const user1 = await getUserByPhone(phone);
    if (user1) {
        return null;
    }
    const passwordHashed = await argon2.hash(password);
    const user = await prisma.user.create({
        data: {
            phone: phone,
            first_name: first_name,
            last_name: last_name,
            password: passwordHashed
        }
    });
    const token = makeid(4);
    await prisma.verificationToken.create({
        data: {
            token: token,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            user: {
                connect: {
                    id: user.id
                }
            }
        }
    });
    return token;
}
