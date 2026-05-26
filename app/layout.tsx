import type { Metadata } from "next";
import { Caveat, Kalam, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-hand",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "shane on chain",
  description:
    "developer · santa cruz · building agent-friendly infra on xrpl evm.",
  metadataBase: new URL("https://shaneonchain.com"),
  openGraph: {
    title: "shane on chain",
    description:
      "developer · santa cruz · building agent-friendly infra on xrpl evm.",
    url: "https://shaneonchain.com",
    siteName: "shane on chain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shane on chain",
    description:
      "developer · santa cruz · building agent-friendly infra on xrpl evm.",
    creator: "@shaneonchain",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${kalam.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
