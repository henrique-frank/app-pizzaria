
import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'

interface AuthUserRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthUserRequest){
        if (!email){
            throw new Error("Incorrect email")
        }

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if (!user){
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch){
            throw new Error("User/password incorrect")
        }        

        return { ok: true}
    }
}

export { AuthUserService };