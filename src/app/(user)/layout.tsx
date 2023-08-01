import { MainNav } from "@/components/main-nav"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <MainNav />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
