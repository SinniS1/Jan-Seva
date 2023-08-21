import BannerCarousel from "@/components/ui/carousel";
import Nav from "./components/Nav";
import Header from "./components/Header";
export default function Home() {
  const images: string[] = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/bacche.jpg",
  ];

  return (
    <>
      <Nav />
      <Header images={images} />
    </>
  );
}
