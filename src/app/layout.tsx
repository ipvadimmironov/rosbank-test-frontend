import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Link from "next/link";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AntdRegistry>
          <Providers>
            <Link href="/">Root</Link>
            <hr style={{
              "borderColor": "rgb(57, 192, 233)",
              "borderWidth": "thin",
              "margin": "10px"
            }}></hr>
            <br></br><br></br>
            {children}
          </Providers>
        </AntdRegistry>
      </body>
    </html >
  );
}
