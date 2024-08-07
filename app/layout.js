import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-1 h-screen justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
