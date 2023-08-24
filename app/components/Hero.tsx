import React from "react";
import Herocard from "./Herocard";
import Cards from "./Cards";
import BannerCarousel from "@/components/ui/carousel";
import AlignmentCards from "./AlignmentCards";
import Footer from "./Footer";

const Hero = () => {
  const footerimages: string[] = [
    "/images/ImgCarousel/boy.jpg",
    "/images/ImgCarousel/boy-student.jpg",
    "/images/ImgCarousel/boy-student2.jpg",
    "/images/ImgCarousel/chote-boys.jpg",
    "/images/ImgCarousel/girl-student.jpg",
    "/images/ImgCarousel/girl-student2.jpg",
    "/images/ImgCarousel/hifi-child.jpg",
  ];
  return (
    <div>
      <main>
        <div className="flex flex-1 justify-center text-center">
          <h1 className="text-[1.2rem] w-[90%] mt-20 ">
            Jansevaa Foundation is an NGO that offers comprehensive support in
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

        <div className="mt-20  h-[30vh] flex flex-col gap-10 items-center w-full text-center">
          <h1 className="text-[3rem] font-medium">Our Initiatives</h1>
          <div className="  grid grid-cols-4 mx-20">
            <Herocard
              heading="LEARNING FOR ALL"
              description="Promoting inclusive education, nourishment, and comprehensive growth of children"
              images="/images/vc.svg"
              customClasses="h-20 "
              blob="/images/blob1.svg"
            />
            <Herocard
              heading="WELLNESS ACCESS"
              description="Bringing essential medical services to remote and underserved communities"
              images="/images/spa.svg"
              customClasses="h-20 "
              blob="/images/blob2.svg"
            />
            <Herocard
              heading="Learning For All"
              description="Promoting inclusive education, nourishment, and comprehensive growth of children"
              images="/images/entrepreneurs.svg"
              blob="/images/blob3.svg"
            />
            <Herocard
              heading="PATH TO PROSPERITY"
              description="Imparting skills and aiding the career journey of disadvantaged youth"
              images="/images/startup.svg"
              blob="/images/blob4.svg"
            />
          </div>
        </div>
        <div className="flex my-20 justify-between mx-10 flex-wrap gap-10 ">
          <Cards
            heading="Knowledge Equality Initiative"
            description="With our Knowledge Equality Initiative, we're committed to LEARNING FOR ALL. We believe in inclusive education that nurtures children's minds and fosters growth."
            images="/images/child.jpg"
          />
          <Cards
            heading="Empowerment Horizon"
            description=" Through our Empowerment Horizon program, we're dedicated to EMPOWERING HER. We're on a mission to uplift young women and girls by engaging them in community-driven initiatives. "
            images="/images/child2.jpg"
          />
          <Cards
            heading="Wellness Outreach"
            description="  Join us in our Wellness Outreach endeavor as we ensure WELLNESS ACCESS for all. Our focus is on bringing crucial medical services to remote and underserved communities."
            images="/images/child3.jpg"
          />
          <Cards
            heading="Prosperity Navigator"
            description="Embark on the PATH TO PROSPERITY with our Prosperity Navigator program. We're dedicated to imparting valuable skills and aiding the career journey of disadvantaged youth."
            images="/images/child4.jpg"
          />
        </div>
        <div className="flex justify-center relative items-center my-15 mb-[10vh]  ">
          <BannerCarousel customClasses="w-[70vw]" images={footerimages} />
          {/* <BannerCarousel /> */}
        </div>
        {/* <div className="my-5">
          <Separator />
        </div> */}
        <div className="bg-[#E2EAFC] pt-10 ">
          <div className="flex justify-center items-center pt-5">
            <h1 className="text-[3rem]  font-semibold">Our Endeavors</h1>
          </div>
          <AlignmentCards
            heading="Jansevaa is a notable NGO foundation renowned for its multifaceted support in critical areas such as medical aid, student education, and training initiatives. Their profound commitment to creating a positive societal impact is exemplified through their dedicated efforts in these key domains. "
            /*   description="no desc" */
            images="/img1.jpg"
            cardtext="NEW ATTRIBUTE"
          />
          <AlignmentCards
            heading="Through their comprehensive approach, Jansevaa offers vital medical assistance, ensures access to quality education for students, and imparts essential skills through various training programs. "
            /*     description="no desc" */
            images="/img2.jpg"
            isImageLeft={true}
            cardtext="WELLNESS ACCESS"
          />
          <AlignmentCards
            images="/img3.jpg"
            heading="This organization's unwavering dedication to fostering positive change is evident in their holistic approach to uplifting communities and individuals in need."
            /*       description="no desc" */
            cardtext="EMPOWERING HER"
          />
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
