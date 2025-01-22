import Navbar from "@/components/Navbar"
import Header from "@/components/Header";
import HeroSectionImage from "@/components/HeroSectionImage";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import AfterProductc from "@/components/AfterProductc";
import Gear from "@/components/Gera";
import DontMiss from "@/components/DontMiss";
import Essential from "@/components/Essential";
import More from "@/components/More";

export default function Home() {
  return (
   <div className="overflow-hidden">
   <Navbar/>
   <Header/>
   <HeroSectionImage/>
   <Products/>
   <AfterProductc/>
   <Gear/>
   <DontMiss/>
   <Essential/>
   <More/>
   <Footer/>
   </div>
  );
}
