import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ToastProvider } from "../../providers/toast-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EPI USE",
  description: "EPI USE assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ToastProvider/> {children}</body>
    </html>
  );
}
