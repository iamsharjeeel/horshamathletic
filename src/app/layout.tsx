import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Horsham Athletic Club | Fitness Center in Horsham, PA",
    template: "%s | Horsham Athletic Club",
  },
  description:
    "Horsham Athletic Club is a full-service fitness center in Horsham, PA offering gym memberships, group fitness classes, personal training, and Parisi Speed School sports performance training.",
  metadataBase: new URL("https://go.horshamathletic.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
