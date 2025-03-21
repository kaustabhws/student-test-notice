import prisma from "@/lib/prismadb";
const getTotalActiveNotice = async () => {
    const activeNotices = await prisma.notice.count({
        where: {
            status: "ACTIVE"
        }
    })
    return activeNotices;
}

export default getTotalActiveNotice