import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarthak Nande",
  description: "Created with ❤️ by Sarthak Nande",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#252525]">{children}</body>
    </html>
  );
}
