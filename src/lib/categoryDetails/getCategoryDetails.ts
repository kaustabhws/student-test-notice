import { Category } from "@prisma/client"

import prisma from "@/lib/prismadb";;

const getCategoryDetails = async (category: Category) => {
    const count = await prisma.notice.count({
        where: {
            category: category,
            status: "ACTIVE"
        }
    })
    return count
}

export default getCategoryDetails
