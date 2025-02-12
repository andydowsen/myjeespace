import dynamic from 'next/dynamic'

const ThemeProvider = dynamic(()=> import('next-themes').then((mod) => mod.ThemeProvider))

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
