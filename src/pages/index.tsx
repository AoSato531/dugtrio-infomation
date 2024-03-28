//import Image from "next/image";
import Header from "../components/header"
import Footer from "../components/footer"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content bg-red-100">
        <div>本サイトはダグトリオの情報を網羅したウェブサイトです</div>
        <div>ポケモンとは関係ありません</div>
      </div>
      <Footer />
    </div>
    
  );
}
