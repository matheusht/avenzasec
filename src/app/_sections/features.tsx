"use client"

import React from "react"
import Balancer from "react-wrap-balancer"

import { RevealAnimation } from "@/components/cult/reveal"

import { BentoLayout } from "./features/bento-layout"
import { OurWorkBanner } from "./features/our-work"

export function Projects() {
  return (
    <div className=" mt-4 z-10">
      <div className="  flex flex-col items-center justify-center">
        <div className="mx-auto max-w-lg md:max-w-5xl lg:max-w-6xl sm:text-center ">
          <div className="mx-auto justify-center items-center  flex gap-3">
            <h2 className=" z-[9999] ">
              <span className="  font-bold tracking-tight text-black text-4xl md:text-5xl lg:text-[98px] ">
                Nossos
              </span>
            </h2>
            <h2 className=" font-bold tracking-tight text-black text-4xl md:text-5xl lg:text-[98px]">
              Serviços
            </h2>
          </div>

          <RevealAnimation>
            <p className="mt-6 px-6 md:text-lg md:leading-8 text-black/90 text-center leading-5">
              <Balancer>
                Na Avenza, transformamos{" "}
                <span className="font-semibold text-black">
                  startups vulneráveis
                </span>{" "}
                em{" "}
                <span className="font-semibold text-black">
                  empresas seguras
                </span>{" "}
                para que possam{" "}
                <span className="font-semibold text-black">
                  escalar com confiança
                </span>
                . Oferecemos um ecossistema completo de
                segurança digital, desde{" "}
                <span className="font-semibold text-black">
                  pentesting com IA
                </span>{" "}
                até{" "}
                <span className="font-semibold text-black">
                  consultoria estratégica
                </span>
                , sempre utilizando as mais avançadas tecnologias do mercado.
                Sua proteção é nossa missão 🛡️
              </Balancer>
            </p>
          </RevealAnimation>
        </div>
      </div>
      <div className="pt-12">
        <OurWorkBanner />
      </div>

      <BentoLayout />
    </div>
  )
}
