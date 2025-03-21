import prisma from "@/lib/prismadb";
const getTotalScheduledNotice = async () => {
    const scheduledNotice = await prisma.notice.count({
        where: {
            status: "SCHEDULED"
        }
    })
    return scheduledNotice
}

export default getTotalScheduledNotice
