// CREDIT - ACETERNITY AWESOME COMPONENTS https://ui.aceternity.com/components/bento-grid
"use client"

import React from "react"
import Image from "next/image"
import {
  IconBoxAlignRightFilled,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemCta,
  BentoImageCard,
} from "@/components/ace/bento"
import TextAnimate from "@/components/cult/text-animate"
import { NextjsIcon, StripeIcon, SupabaseIcon } from "@/components/icons"

export function BentoLayout() {
  return (
    <>
      <div className="pt-24  pb-6 flex flex-col items-center justify-center">
        <TextAnimate
          className="font-black pb-6 text-3xl"
          text="Tudo que você precisa"
          type="shiftInUp"
        />
        <p className="max-w-md md:max-w-lg text-center text-xl">
          <Balancer>
            Desenvolver software pode ser complexo. Nós tornamos{" "}
            <span className="bg-orange-100 font-bold px-2 rounded-sm">
              simples.
            </span>{" "}
            A Avenza oferece{" "}
            <span className="bg-orange-100 font-bold px-2 rounded-sm">
              agilidade,
            </span>{" "}
            tecnologias modernas e uma arquitetura que escala de 0 a milhões de
            usuários{" "}
            <span className="bg-black text-orange-100 font-bold px-2 rounded-sm">
              rapidamente.
            </span>
          </Balancer>
        </p>
      </div>
      <div className=" py-12 max-w-6xl mx-auto ">
        <div className=" py-12 rounded-3-xl px-2">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] w-full">
            <BentoImageCard
              text="Modernas"
              image={"/Clay-6.png"}
              description="soluções de software"
              className="md:col-span-1 w-full min-w-full"
            ></BentoImageCard>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
              />
            ))}
            <BentoGridItemCta
              title={ctaCard.title}
              description={ctaCard.description}
              header={ctaCard.header}
              className={cn("[&>p:text-lg]", ctaCard.className)}
              icon={ctaCard.icon}
            />
          </BentoGrid>
        </div>
      </div>
    </>
  )
}

const SkeletonTwo = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 "
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <motion.div>
          <SupabaseIcon className=" h-24 w-24 grayscale" />
        </motion.div>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <motion.div>
          <NextjsIcon className=" h-24 w-16 " />
        </motion.div>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <motion.div>
          <StripeIcon className="grayscale" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ffcba3, #ff6c0a, #ffcba3, #fff2eb)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  )
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://i.pravatar.cc/300?img=50"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          Landing pages precisam ser rápidas
        </p>
        <p className="border border-orange-500 bg-orange-100  text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Performance
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://i.pravatar.cc/300?img=51"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          UX é a chave para conversão
        </p>
        <p className="border border-black bg-black  text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Conversão
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://i.pravatar.cc/300?img=5"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-[#1d1d1f] mt-4">
          SEO otimizado para resultados
        </p>
        <p className="border border-orange-800 bg-orange-200 dark:bg-orange-900/20 text-orange-800 text-xs rounded-full px-2 py-0.5 mt-4">
          Visibilidade
        </p>
      </motion.div>
    </motion.div>
  )
}

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem]  bg-black/[0.2]  flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-black/10  shadow-2xl p-2  items-start space-x-2 bg-white/10  backdrop-blur-lg"
      >
        <Image
          src="https://i.pravatar.cc/300?img=56"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-white">
          Para o MVP queremos que nosso produto analise dados do consumidor. IA
          deve resumir, analisar e indexar insights únicos...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-orange-300/70 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white/10 backdrop-blur-lg "
      >
        <p className="text-xs text-white">
          Prepare seu post no LinkedIn 🚀 Podemos construir sua solução em 5
          semanas...
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "Arquitetura Premium",
    description: (
      <span className="text-sm">
        Orçamento apertado? Mantenha custos baixos e escale para milhões.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-[#1d1d1f]" />,
  },
  {
    title: "Performance Extrema",
    description: (
      <span className="text-sm">
        Sites 3x mais rápidos que a concorrência. Maior velocidade = mais
        conversões e melhor SEO.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-[#1d1d1f]" />,
  },
  {
    title: "Desenvolvimento Baseado em Dados",
    description: (
      <span className="text-sm">
        Transforme dados em decisões. Análise preditiva, visualização de dados,
        dashboards interativos e relatórios automatizados.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-[#1d1d1f]" />,
  },
]

const ctaCard = {
  title: "Comece hoje",
  description: (
    <span className="text-sm">
      Comece hoje, lance seu novo MVP SaaS no próximo mês.
    </span>
  ),
  header: <SkeletonFive />,
  className: "md:col-span-1",
  icon: <IconBoxAlignRightFilled className="h-4 w-4 text-[#1d1d1f]" />,
}
