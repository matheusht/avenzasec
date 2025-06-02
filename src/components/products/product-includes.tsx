"use client"

import { motion } from "framer-motion"

import { GradientHeading } from "@/components/cult/gradient-heading"

interface ProductIncludesProps {
  features: string[]
}

export const ProductIncludes = ({ features }: ProductIncludesProps) => {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-accent rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl lg:text-2xl">✨</span>
          </div>
          <GradientHeading size="lg">O que você vai receber</GradientHeading>
        </motion.div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Tudo que você precisa para transformar seus anúncios em máquinas de
          geração de leads
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex items-start gap-3 lg:gap-4 p-4 lg:p-6 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-card via-card/90 to-card/70 hover:from-primary/5 hover:via-accent/5 hover:to-primary/5 transition-all duration-300 border hover:border-primary/20 hover:shadow-xl"
            whileHover={{ y: -5 }}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-foreground font-semibold text-base lg:text-lg leading-relaxed group-hover:text-primary transition-colors">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 text-center max-w-4xl mx-auto border border-primary/10"
      >
        <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-accent rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl">
            <span className="text-white text-xl lg:text-2xl">🎯</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold">
            Implementação Completa
          </h3>
        </div>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 lg:mb-8">
          Não se preocupe com aspectos técnicos. Nossa equipe cuida de tudo para
          você, desde a configuração inicial até o treinamento da sua equipe.
          Você só precisa focar no que sabe fazer: vender imóveis!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="space-y-1">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white text-base lg:text-lg">⚙️</span>
            </div>
            <div className="font-semibold text-sm lg:text-base">
              Setup Automático
            </div>
            <div className="text-xs lg:text-sm text-muted-foreground">
              Configuramos tudo para você
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white text-base lg:text-lg">🎓</span>
            </div>
            <div className="font-semibold text-sm lg:text-base">
              Treinamento Incluído
            </div>
            <div className="text-xs lg:text-sm text-muted-foreground">
              Sua equipe dominará a ferramenta
            </div>
          </div>
          <div className="space-y-1">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white text-base lg:text-lg">🚀</span>
            </div>
            <div className="font-semibold text-sm lg:text-base">
              Lançamento Rápido
            </div>
            <div className="text-xs lg:text-sm text-muted-foreground">
              Primeiro resultado em 24h
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
