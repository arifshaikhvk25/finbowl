import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../styles/index.scss";
import QueryProvider from "./providers/QueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinBowl Dashboard",
  description: "Take-Home Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#F8F9FD] min-h-screen text-[#1E1B26] antialiased">
        <QueryProvider>
          <div className="flex">
            {/* <Sidebar /> */}
            Side bar
            <div className="flex-1 pl-[260px] min-h-screen flex flex-col">
              {/* Top Navigation Bar */}
              <header className="h-[72px] bg-white border-b border-[#E2E8F0] flex items-center px-[32px] justify-between sticky top-0 z-40">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[13px] text-gray-600 bg-gray-50 font-medium px-3 py-1.5 rounded border border-gray-200">
                    Gracia Advisory Group
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center font-bold text-sm text-purple-800">
                  AM
                </div>
              </header>

              <main className="p-[32px] flex-1">{children}</main>
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
