import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouroboros Landing",
  description:
    "A minimalist exploration of transformation, discipline, and continuous evolution."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#050505",
          color: "#fff",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
