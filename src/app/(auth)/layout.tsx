import { ThemeProvider } from "@/components/theme-provider"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="w-screen h-screen bg-black">
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              {children}
            </ThemeProvider>
  
        </body>
      </html>
    )
  }