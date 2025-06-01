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
        <div className="mx-auto max-w-lg md:max-w-4xl sm:text-center ">
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
                A Avenza oferece soluções completas em desenvolvimento de
                software. Desde consultoria estratégica até produtos white
                label, transformamos suas ideias 💡 em realidade digital com
                tecnologia de ponta.
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
