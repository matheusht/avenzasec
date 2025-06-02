import Image from "next/image"
import caioImg from "@/images/members/caio.jpeg"
import joaoImg from "@/images/members/joao.jpeg"
import marcioImg from "@/images/members/marcio.jpeg"
import matheusImg from "@/images/members/matheus.jpeg"

import { GradientCard } from "@/components/cult/card"
import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

const gradients = [
  "linear-gradient(to bottom, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)", // pink white
  "linear-gradient(135deg, #1C1C1C 0%, #242424 50%, #0A0A0A 100%)", // gray black
  "linear-gradient(135deg, #FFECB3 0%, #FFC8DD 50%, #EF629F 100%)", // pink yellow
  "linear-gradient(135deg, #D4FC79 0%, #96E6A1 50%, #42E695 100%)", // green
  "linear-gradient(135deg, #FFD479 0%, #FF5A00 50%, #C24914 100%)", // orange
  "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 50%, #A1C4FD 100%)", // blue pink
]
const teamMembers = [
  {
    name: "Caio Theodoro",
    role: "Software Architect",
    topics: ["Arquitetura Cloud", "Especialista em SEO", "UX/UI Design"],
    gradient: gradients[5],
    textColor: "text-white",
    img: caioImg,
  },
  {
    name: "Matheus Henrique",
    role: "Security Engineer",
    topics: ["Cybersecurity", "Cloud Security", "Compliance Specialist"],
    gradient: gradients[4],
    textColor: "text-white",
    img: matheusImg,
  },
  {
    name: "Marcio Koziel",
    role: "Software Engineer",
    topics: ["Especialista Full Stack", "Mercado global", "Performance"],
    gradient: gradients[3],
    textColor: "text-black",
    img: marcioImg,
  },
  {
    name: "João Vitor Sberse",
    role: "Software Engineer",
    topics: [
      "Especialista em startups",
      "Soluções utilizando IA",
      "Catalizador de inovação",
    ],
    gradient: gradients[0],
    textColor: "text-black",
    img: joaoImg,
  },
]

export function Team() {
  return (
    <>
      <div className="flex py-9 justify-center items-center flex-col">
        <TextAnimate
          text="Nossa Equipe"
          type="shiftInUp"
          className="text-[2rem] font-bold md:text-[6rem] md:font-medium tracking-tighter text-[#353234] px-4 text-center"
        />

        <GradientHeading size="sm" variant="brand" className="px-4 text-center">
          Conheça os talentos por trás da nossa excelência.
        </GradientHeading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="group">
            <GradientCard
              type={member.role}
              price={member.name}
              textColor={member.textColor}
              gradient={member.gradient}
              topics={member.topics}
            >
              <div className="mt-4 md:mt-6 transform transition-transform duration-300">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </GradientCard>
          </div>
        ))}
      </div>
    </>
  )
}
