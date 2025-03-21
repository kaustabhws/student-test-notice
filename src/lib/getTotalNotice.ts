import prisma from "@/lib/prismadb";
const getTotalNotice = async () => {
    const total_notice = await prisma.notice.count()
    return total_notice;
}
export default getTotalNotice