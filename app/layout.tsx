import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Web Developer",
  description: "A web developer portfolio featuring selected projects and work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900">
        {children}
        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="mt-auto min-h-[72px] border-t border-violet-100 bg-white"
            />
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
