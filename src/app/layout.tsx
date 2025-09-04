import type { Metadata } from "next";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/700.css";
import "@fontsource/varela-round/400.css";
import "./globals.css";
import ParallaxProvider from '@/components/ParallaxProvider';

export const metadata: Metadata = {
  title: "לב ללמידה - למידה מותאמת אישית",
  description: "שיעורים פרטיים בעברית ומתמטיקה לתלמידי בית ספר יסודי - למידה מותאמת אישית ואדפטיבית",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased font-heebo">
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
