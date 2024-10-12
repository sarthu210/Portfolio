import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function Education() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex gap-2">
            <Image src="https://media.licdn.com/dms/image/v2/D560BAQFH32CpcL6XEw/company-logo_200_200/company-logo_200_200/0/1721102646754/thecuriousorganization_logo?e=1736985600&v=beta&t=oNmfTHDBStqO81L5Q-KeLvNGJqXju0mftR3WxE2A9Lg"
              alt="Curious Ecosystem"
              width={70}
              height={70}
              className=" mb-8"

            />
            <p className="text-white text-xs md:text-sm font-normal self-center mb-8">
              Completed a Full Stack Developer Internship at Curious Ecosystem where I developed UIs using React.js, Tailwind CSS, and Node.js. Conducted R&D on the latest technology trends.
            </p>
          </div>
          <div className="flex gap-2">
            <Image src="https://png.pngtree.com/png-vector/20220925/ourmid/pngtree-certified-ribbon-badge-stamp-design-png-image_6216210.png"
              alt="Certified Web Developer"
              width={70}
              height={70}
              className=" mb-8"
            />
            <p className="text-white text-xs self-center md:text-sm font-normal mb-8">
              Completed certifications such as Certified Web Developer from Internshala, Docker Foundations, and Google Analytics, enhancing my skills in web development and containerization.
            </p>
          </div>
          <div className="flex gap-2">
            <Image src="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
              alt="GirlScript Summer of Code"
              width={70}
              height={70}
              className="bg-white mb-8"
            />
            <p className="text-white text-xs self-center md:text-sm font-normal mb-8">
              I contributed to GirlScript Summer of Code, where I collaborated on open-source projects and successfully earned multiple badges for my contributions. This experience enhanced my skills in open-source development, collaboration, and working with technologies like Node.js and Visual Web Development.
            </p>
          </div>
          
          
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          
          <div className="flex gap-2">
            <Image src="https://gssoc.girlscript.tech/badges/postman.png"
              alt="Postman API Hackathon"
              width={70}
              height={70}
              className=" mb-8"
            />
            <p className="text-white text-xs self-center md:text-sm font-normal mb-8">
              Led a successful submission as team leader in BITS Pilani’s Postman API Hackathon and directed frontend development as GDSC Frontend Development Leader at college.
            </p>
          </div>
          <div className="flex gap-2">
            <Image src="https://media.licdn.com/dms/image/v2/D560BAQHqqREuYOZewQ/company-logo_200_200/company-logo_200_200/0/1701272685881/unstop_logo?e=1736985600&v=beta&t=1wH_PV40NBddwGViqAhvI9BjZGkq2EBBo8OIXtaAcKo"
              alt="Postman API Hackathon"
              width={70}
              height={70}
              className=" mb-8"
            />
            <p className="text-white text-xs self-center md:text-sm font-normal mb-8">
            As a Unstop Campus Representative, I actively promoted Unstop's events and initiatives within my college community, enhancing awareness and engagement. I developed my skills in community development, code design, and communication by organizing events and collaborating with peers. This role helped me improve my leadership and networking abilities while representing Unstop's brand at a grassroots level.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <div className="flex gap-2">
            <Image src="https://media.licdn.com/dms/image/v2/C4E0BAQH7_hyBqydhvw/company-logo_200_200/company-logo_200_200/0/1630628313833/skn_sinhgad_colleg_of_engineering_korti_tal_pandharpur_dist_solapur_logo?e=2147483647&v=beta&t=3Oc58YTNWoYRC77yXws8uGusZSn7RfFDJS39dQYKLqo"
              alt="SKNSCOE"
              width={70}
              height={70}
              className=" mb-8"

            />
            <p className="text-white self-center text-xs md:text-sm font-normal mb-8">
              Began my B.Tech in Computer Science & Engineering at SKN Sinhgad College of Engineering with a GPA of 9.43, working on various projects that applied full-stack development principles.
            </p>
          </div>

          <div className="flex gap-2">
            <Image src="https://sardacollege.org/wp-content/uploads/2024/02/sarda_logo_1.jpeg"
              alt="Curious Ecosystem"
              width={70}
              height={70}
              className=" mb-8"

            />
            <p className="text-white self-center text-xs md:text-sm font-normal mb-8">
              Completed my 12th grade (H.S.C) at Pemraj Sarda College, scoring 81%, with a strong foundation in science and mathematics.
            </p>
          </div>

        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
