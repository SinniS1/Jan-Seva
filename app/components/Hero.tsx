import { Switch } from "@/components/ui/switch";
import React from "react";

const Hero = () => {
  return (
    <div>
      <main>
        <div className="flex flex-1 justify-center text-center">
          <h1 className="text-[1.2rem] w-1/2 mt-10 ">
            Jansevaa is an NGO foundation that offers comprehensive support in
            the fields of &nbsp;
            <span className="font-semibold bg-yellow-200 ">
              medical assistance, student education, and training programs.
            </span>
            &nbsp;Through their initiatives, they provide crucial medical aid,
            facilitate quality education for students, and offer training
            programs to equip individuals with essential skills. Jansevaa's
            commitment to making a positive impact on society is reflected in
            their dedication to these key areas of assistance.
          </h1>
        </div>
        <div className="mt-20 h-[50vh] w-full bg-[#efe3ce8a] text-center">
          <br />
          <h1 className="uppercase font-extrabold text-[3.5rem] mt-3">
            Our Accomplishments
          </h1>
          {/* numbers */}
          <div className="items-center flex justify-center ">
            <div className="flex items-center justify-evenly w-1/2 mt-[3rem]">
              <h1 className="grid  font-bold text-[2rem]">
                <span className="text-[4rem]">15+ </span>
                <span className="uppercase mb-4">Thousand </span>
                <span className="text-[1.5rem] font-normal">
                  children and their families are impacted every year
                </span>
              </h1>
              <h1 className="grid  font-bold text-[2rem]">
                <span className="text-[4rem]">120+</span>
                <span className="uppercase mb-4">Projects </span>
                <span className="text-[1.5rem] font-normal">
                  focused on education, healthcare, and women empowerment
                </span>
              </h1>
              <h1 className="grid  font-bold text-[2rem]">
                <span className="text-[4rem]">25+</span>
                <span className="uppercase mb-4">States </span>
                <span className="text-[1.5rem] font-normal">
                  are reached including the remotest areas
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* programms */}

        <div className="mt-20 h-[30vh] w-full text-center">
          <div>
            <h1>Our Initiatives</h1>
          </div>
          <div className=" grid grid-cols-2">
            <div className="">
              <img src="" alt="" />
              <div className="">
                <h1>LEARNING FOR ALL</h1>
                <p>
                  Promoting inclusive education, nourishment, and comprehensive
                  growth of children
                </p>
              </div>
            </div>
            <div className="">
              <img src="" alt="" />
              <div className="redBG w-fit text-start">
                <h1>EMPOWERING HER</h1>
                <p className="w-1/2">
                  Uplifting young women and girls through involvement in the
                  community
                </p>
              </div>
            </div>
            <div className="">
              <img src="" alt="" />
              <div className="">
                <h1>WELLNESS ACCESS</h1>
                <p>
                  Bringing essential medical services to remote and underserved
                  communities
                </p>
              </div>
            </div>
            <div className="">
              <img src="" alt="" />
              <div className="">
                <h1>PATH TO PROSPERITY</h1>
                <p>
                  Imparting skills and aiding the career journey of
                  disadvantaged youth
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
