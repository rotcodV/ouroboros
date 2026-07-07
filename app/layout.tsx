import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OUROBOROS - Every End Is A New Beginning",
  description:
    "A motion-led landing page about renewal, discipline, return, and transformation."
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
