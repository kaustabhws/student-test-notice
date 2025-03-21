import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { userId} = await auth()
    if (!userId) {
        redirect('/sign-in')

    }
    const findAdmin = await prisma.admin.findUnique({
        where: {
            clerkId: userId
        }
    })
    if (userId && !findAdmin) {
        redirect('/register-admin')
    } else {
        redirect('/admin')
    }
    
    return (
        <>
            {children}
        </>

    );
}
