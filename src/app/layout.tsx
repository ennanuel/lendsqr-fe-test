
import { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

import "@/styling/globals.scss";

export const metadata: Metadata = {
  title: {
    default: 'Lendsqr Frontend Assessment',
    template: '%s | Lendsqr Frontend Assessment',
  },
  description: 'Lendsqr Front-end assessment.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
};