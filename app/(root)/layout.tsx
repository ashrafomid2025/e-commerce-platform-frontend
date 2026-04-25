import Header from "@/components/ui/shared/header";
import { APP_DESCRIPTION } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: APP_DESCRIPTION,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="wrapper flex-1">{children}</main>
    </div>
  );
}
