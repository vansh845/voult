import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" >
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>
              {children}
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
