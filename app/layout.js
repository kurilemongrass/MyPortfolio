import PreLoader from "@/layouts/PreLoader";
import "./globals.css";

import "@css/bootstrap.min.css";
import "@css/font-awesome-pro.css";
import "@css/plugin.css";
import "@css/responsive.css";
import "@css/scroll_button.css";
import "@css/spacing.css";
import "@css/style.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Kuri Fung's Personal Space",
  description: "Kuri Fung's Personal Space",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--PrimaryFont",
  display: "swap",
});
const fontFamily = `${poppins.variable} `;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontFamily}>
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
