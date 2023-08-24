import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";
import "@/app/components/style.css";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import BannerCarousel from "@/components/ui/carousel";
import Dropdown from "@/app/components/Dropdown";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

type NavType = {};
const Nav = ({}: NavType) => {
  return (
    <main className="fixed z-10 bg-white w-full border-b-2 border-slate-200">
      <nav className="flex mx-[40px] my-2 ">
        <div className="flex  gap-4  items-center justify-center">
          <div className="relative h-20 w-20">
            <Image
              src={logo}
              alt="Blob"
              fill
              style={{ objectFit: "contain", position: "absolute", inset: "0" }}
            />
          </div>
          <h1 className="uppercase font-bold text-3xl font-serif">
            <span className="text-orange-500">Jan</span>{" "}
            <span className="text-[#036C93]">sevaa</span>{" "}
          </h1>
        </div>
        <div className="flex flex-1 gap-10 items-center  justify-end">
          <Dropdown />
          <ul className="gap-[30px]  flex items-center justify-center">
            <div className="flex justify-center items-center">
              <Switch />
              <h1 className="text-[1.1rem] font-semibold">&nbsp; हिंदी</h1>
            </div>
            <Link
              className="font-bold text-xl text-orange-500 "
              href={"/Aboutus"}
            >
              About Us
            </Link>
            <a className="font-bold text-xl hover-underline " href="#">
              Events
            </a>
            <Button className="border text-[1.1rem] font-bold border-blue-500 bg-transparent text-black hover:text-white hover:bg-blue-300">
              Donate
            </Button>
            <Button className=" text-[1.1rem] font-semibold glow-on-hover">
              Login
            </Button>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Nav;
