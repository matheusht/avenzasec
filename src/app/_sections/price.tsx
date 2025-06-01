import { GradientCard } from "@/components/cult/card"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { OrganicButton } from "@/components/cult/organic-button"
import TextAnimate from "@/components/cult/text-animate"

const gradients = [
  "linear-gradient(to bottom, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)", // pink white
  "linear-gradient(135deg, #1C1C1C 0%, #242424 50%, #0A0A0A 100%)", // gray black
  "linear-gradient(135deg, #FFECB3 0%, #FFC8DD 50%, #EF629F 100%)", // pink yellow
  "linear-gradient(135deg, #D4FC79 0%, #96E6A1 50%, #42E695 100%)", // green
  "linear-gradient(135deg, #FFD479 0%, #FF5A00 50%, #C24914 100%)", // orange
  "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 50%, #A1C4FD 100%)", // blue pink
]

export function Pricing() {
  return (
    <>
      <div className="flex  py-9 justify-center items-center flex-col">
        <TextAnimate
          text="Nossos Serviços"
          type="shiftInUp"
          className="text-[2.3rem] font-bold md:text-[6rem] md:font-medium tracking-tighter text-orange-50"
        />

        <GradientHeading size="sm" variant="lightSecondary">
          Escolha a solução ideal para seu negócio.
        </GradientHeading>
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center w-full gap-2 px-2">
        <GradientCard
          type="consultoria"
          price="R$ 8.500/mês"
          textColor="text-white"
          gradient={gradients[1]}
          description="Consultoria estratégica e desenvolvimento sob demanda. Pause ou cancele a qualquer momento."
        >
          <div className="bg-orange-600 w-full absolute bottom-0 left-0 rounded-r-[28px] rounded-b-[28px] py-8 pl-6">
            <div className="">
              <OrganicButton label="começar" />
            </div>
          </div>
        </GradientCard>

        <GradientCard
          type="white label"
          price="R$ 15.000/mês"
          textColor="text-black"
          gradient={gradients[4]}
          description="Produtos white label completos. Soluções prontas para sua marca com suporte total."
        >
          <OrganicButton label="começar" />
        </GradientCard>
      </div>
    </>
  )
}
