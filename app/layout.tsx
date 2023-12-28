import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { UserCoinsProvider } from "./context/userCoins";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoHub",
  description: "Web App to buy and exchange cryptos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <UserCoinsProvider>{children}</UserCoinsProvider>
        </Providers>
      </body>
      {/* <link rel="stylesheet" href="dist/notiflix-3.2.6.min.css" />
      <script src="dist/notiflix-3.2.6.min.js"></script> */}
    </html>
  );
}
