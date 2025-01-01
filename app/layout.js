import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Burek",
  description: "Order your favourite burgers, bureks and yantiks in your city. ✔️ quickly ✔️ on time ✔️ tasty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
