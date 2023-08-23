import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="flex justify-center items-center mt-36">
          <img
            className="h-[70vh] w-[95vw] object-cover rounded-md"
            src="/bacche.jpg"
            alt="VHL GROUP"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            Welcome to Jansevaa – a beacon of hope, a catalyst for change, and a
            testament to the power of collective compassion. At Jansevaa, we
            believe that true progress is measured not just in economic terms.
            Our journey is one of dedication, empathy, and unwavering commitment
            to creating a world where every individual has the opportunity to
            thrive, regardless of their circumstances.
          </p>
          <img
            className="h-9 z-10 right-[7%] -bottom-3 absolute"
            src="/icons/quotes-right.svg"
            alt="VHL"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            Founded with a vision to make a meaningful difference, Jansevaa
            stands as a remarkable NGO foundation, revered for its multifaceted
            and impactful initiatives. Our areas of focus span across critical
            sectors, including medical aid, student education, and comprehensive
            training programs. Through these pillars, we have woven a tapestry
            of change that touches lives at their core. In the realm of medical
            aid, we extend a helping hand to those who need it most. Our medical
            assistance initiatives are not just about treating ailments; they're
            about restoring dignity and providing a ray of hope to those facing
            health challenges for the betterment of their life.
          </p>
          <img
            className="h-9 z-10 right-[8%] -bottom-3 absolute"
            src="/icons/quotes-right.svg"
            alt="VHL"
          />
        </div>
        <br />
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex justify-center items-center">
          <img
            className="h-[70vh] w-[95vw] object-cover rounded-md"
            src="/images/ImgCarousel/hifi-child.jpg"
            alt="VHL GROUP"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            Whether it's providing essential medications, organizing health
            camps, or facilitating medical procedures, we stand by our
            commitment to healing lives and easing burdens. Education is the
            cornerstone of progress, and at Jansevaa, we are dedicated to
            ensuring that every child's potential is nurtured and unlocked. We
            work tirelessly to provide access to quality education, learning
            resources, and mentorship, empowering students to envision a
            brighter future and equipping them with the tools to realize their
            dreams.
          </p>
          <img
            className="h-9 z-10 right-[11%] -bottom-3 absolute"
            src="/icons/quotes-right.svg"
            alt="VHL"
          />
        </div>
        <div className="flex justify-center items-center relative ">
          <img
            className="h-9 z-9 left-[2%] -top-[16%] absolute"
            src="/icons/quotes-left.svg"
            alt="VHL"
          />
          <p className="text-[1.2rem] w-[90%] text-center">
            But our impact doesn't stop there. We recognize that true
            empowerment encompasses holistic growth. Through our diverse
            training initiatives, we empower individuals with essential skills
            that open doors to opportunities they might not have thought
            possible. From vocational training that enhances employability to
            life skills that foster personal development, our training programs
            create pathways to self-sufficiency and success. At the heart of
            Jansevaa lies an unyielding dedication to fostering positive change.
          </p>
          <img
            className="h-9 z-10 right-[9%] -bottom-3 absolute"
            src="/icons/quotes-right.svg"
            alt="VHL"
          />
        </div>
        <br />
      </div>
      <div className="flex flex-row justify-center gap-24">
        <p className="text-[1.2rem] w-[15vw] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi atque
          dolores tempora a harum saepe distinctio dignissimos eos iure quos
          tenetur sequi perspiciatis facere sunt, consequatur unde quas dolorem
          itaque.
        </p>
        <p className="text-[1.2rem] w-[15vw] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi atque
          dolores tempora a harum saepe distinctio dignissimos eos iure quos
          tenetur sequi perspiciatis facere sunt, consequatur unde quas dolorem
          itaque.
        </p>
        <p className="text-[1.2rem] w-[15vw] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi atque
          dolores tempora a harum saepe distinctio dignissimos eos iure quos
          tenetur sequi perspiciatis facere sunt, consequatur unde quas dolorem
          itaque.
        </p>
      </div>
    </div>
  );
};

export default page;
