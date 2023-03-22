import prisma from "@/lib/prisma/prisma"

export async function getUserByPhone(phone: string){
    return await prisma.user.findUnique({
        where:{
            phone: phone
        },
    })
}
