"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { GradientHeading } from "./gradient-heading"

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "TechStartup",
    role: "CEO",
    content:
      "A Avenza transformou nossa ideia em uma aplicação robusta em apenas 6 semanas. A qualidade do código e a atenção aos detalhes superaram nossas expectativas.",
    avatar: "https://i.pravatar.cc/300?img=60",
  },
  {
    id: 2,
    name: "Marina Santos",
    company: "InnovaLabs",
    role: "CTO",
    content:
      "Trabalhar com a Avenza foi uma experiência incrível. Eles entenderam perfeitamente nossa necessidade de escalabilidade e entregaram uma solução de IA que revolucionou nosso negócio.",
    avatar: "https://i.pravatar.cc/300?img=61",
  },
  {
    id: 3,
    name: "Roberto Lima",
    company: "Digital Solutions",
    role: "Diretor de Tecnologia",
    content:
      "A consultoria da Avenza foi fundamental para estruturarmos nossa arquitetura. O conhecimento técnico da equipe é impressionante.",
    avatar: "https://i.pravatar.cc/300?img=62",
  },
  {
    id: 4,
    name: "Ana Costa",
    company: "E-commerce Plus",
    role: "Fundadora",
    content:
      "O produto white label da Avenza nos permitiu lançar nossa plataforma 3x mais rápido. Recomendo para qualquer empresa que quer acelerar seu time-to-market.",
    avatar: "https://i.pravatar.cc/300?img=63",
  },
  {
    id: 5,
    name: "Pedro Oliveira",
    company: "FinTech Nova",
    role: "Product Manager",
    content:
      "A Avenza não apenas desenvolveu nossa aplicação, mas também nos orientou sobre as melhores práticas. Parceiros de verdade!",
    avatar: "https://i.pravatar.cc/300?img=64",
  },
  {
    id: 6,
    name: "Juliana Ferreira",
    company: "HealthTech",
    role: "COO",
    content:
      "Precisávamos de uma solução complexa de análise de dados médicos. A Avenza entregou exatamente o que precisávamos, no prazo e com qualidade excepcional.",
    avatar: "https://i.pravatar.cc/300?img=65",
  },
]

export function TweetGrid({}) {
  return (
    <div className="pb-12 ">
      <div className="flex w-full justify-center pb-12">
        <GradientHeading size="xl" weight="black">
          Nossos Clientes Falam
        </GradientHeading>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="columns-1 sm:columns-2 md:columns-3 max-w-4xl md:max-w-6xl px-2 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
