"use client"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
    <style jsx global>
      {
        `
          .navbar-shwocasing{
          display: none;
          };
        `
      }

    </style>
    {children}
    
    </>;
  }
  