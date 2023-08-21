import BannerCarousel from "@/components/ui/carousel";
import React from "react";

type HeaderType = {
  images: string[];
};
const Header = ({ images }: HeaderType) => {
  return (
    <>
      <BannerCarousel images={images} />
    </>
  );
};

export default Header;
