import prisma from "@/lib/prismadb";
const getSubscribedUser = async () => {
    const totalSubscribedUser = await prisma.suscribedUser.count()
    return totalSubscribedUser
}
export default getSubscribedUser