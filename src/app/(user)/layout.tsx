import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <main>
                        {children}
                    </main>
                </ThemeProvider>
                <MainNav />
            </body>
        </html>
    )
}
