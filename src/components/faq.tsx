import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import TextAnimate from "./cult/text-animate"

export function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20 bg-transparent rounded-t-[48px]">
      <div className="py-12">
        <TextAnimate
          text="Perguntas "
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-bold md:leading-10 md:pb-14 tracking-tight text-orange-100 md:py-8"
        />
        <TextAnimate
          text="frequentes. "
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-bold md:leading-10 tracking-tight text-orange-100 md:py-8 font-brand"
        />
      </div>

      {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FF7C33_100%)]"></div>

      <div className="md:mx-auto">
        <Accordion
          type="multiple"
          className="w-full md:space-y-9 bg-black/10 rounded-xl border border-orange-50/20 text-white  backdrop-blur "
        >
          <AccordionItem
            value="item-1"
            className="border-x border-b-0 border-black/10 rounded-md md:px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pr-4 md:pr-0  font-medium">
              <span className="px-6 md:px-2">
                Por que não contratar um desenvolvedor full-time?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-neutral-300 px-4">
              Boa sorte! O custo anual de um desenvolvedor sênior capaz de
              design, front-end, back-end e arquitetura de banco de dados excede
              R$ 300.000, além dos benefícios. Isso sem contar os custos de
              recrutamento e tempo de entrevistas. Com nossos serviços, você tem
              baixo risco e máxima qualidade. É um verdadeiro ganha-ganha :)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-x border-b-0 border-black/10 rounded-md px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              Há limite para quantos projetos posso ter?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-neutral-300 pl-2">
              Uma vez contratados, você pode adicionar quantos projetos quiser à
              sua fila, e eles serão entregues um por um, seguindo nossas
              metodologias ágeis e com total transparência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-x border-b-0 border-black/10 rounded-md px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              Quanto tempo leva para desenvolver um projeto completo?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-neutral-300 pl-2">
              A maioria dos projetos é concluída em 4-8 semanas. Projetos mais
              complexos podem levar mais tempo, mas sempre mantemos comunicação
              transparente sobre prazos e entregas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-x border-b-0 border-black/10 rounded-md px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              Quem é a equipe da Avenza?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-neutral-300 pl-2">
              Nossa equipe é composta por desenvolvedores sêniores, arquitetos
              de software e especialistas em UX/UI, todos com vasta experiência
              em projetos de grande escala e tecnologias modernas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border-x border-b-0 border-black/10 rounded-md px-4"
          >
            <AccordionTrigger className=" text-xl md:text-3xl text-left pl-2  font-medium">
              E se eu quiser uma stack tecnológica diferente?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-semibold text-neutral-300 pl-2">
              Trabalhamos com as principais tecnologias do mercado: React,
              Next.js, Node.js, Python, AWS, e muito mais. Se você tem uma
              preferência específica, conversamos sobre a melhor abordagem para
              seu projeto.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
