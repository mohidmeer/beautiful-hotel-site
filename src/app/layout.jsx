
import { Poppins } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { ThemeProvider } from "@/components/shared/theme-provider";

const poppins = Poppins({ subsets: ["latin"] , weight:['100','200','300','400','500','600','700','800','900']});

export const metadata = {
  title: "Karen Retreat",
  description: "Discover top-rated hotels in Neelum Valley, offering breathtaking views, luxurious amenities, and unparalleled comfort. Book your perfect stay today for an unforgettable experience in nature's paradise. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
              <body className={poppins.className}>{children}</body>
          </ThemeProvider>
      
    </html>
  );
}
