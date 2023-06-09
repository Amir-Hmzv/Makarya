import HeaderPage from "@/components/HeaderPage";
import SliderPropagination from "@/context/sliderPropagination/SliderPropagination";
import Header from "../components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SliderPropagination>
          <Header/>
          {children}
          <Footer/>
        </SliderPropagination>
      </body>
    </html>
  );
}
