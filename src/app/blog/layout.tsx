import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles sur divers sujets"
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}