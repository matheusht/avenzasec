"use client"

import { motion } from "framer-motion"

import { GradientHeading } from "@/components/cult/gradient-heading"

export const ProductGuarantee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-green-950/30 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 border-2 border-green-200 dark:border-green-800 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 opacity-50" />

        <div className="relative text-center space-y-6 lg:space-y-8">
          <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl lg:text-3xl">🛡️</span>
            </div>
            <GradientHeading
              size="lg"
              className="text-green-800 dark:text-green-300"
            >
              Garantia Total de Resultados
            </GradientHeading>
          </div>

          <p className="text-lg lg:text-xl text-green-700 dark:text-green-400 font-semibold leading-relaxed max-w-2xl mx-auto">
            30 dias de garantia incondicional. Se nossa solução não aumentar
            seus leads qualificados, devolvemos 100% do seu investimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-8">
            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-xl lg:text-2xl">✅</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300 text-sm lg:text-base">
                Sem Riscos
              </div>
              <div className="text-xs lg:text-sm text-green-600 dark:text-green-400">
                Teste por 30 dias completos
              </div>
            </motion.div>

            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-emerald-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-xl lg:text-2xl">💰</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300 text-sm lg:text-base">
                Reembolso Total
              </div>
              <div className="text-xs lg:text-sm text-green-600 dark:text-green-400">
                100% do valor de volta
              </div>
            </motion.div>

            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-teal-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-xl lg:text-2xl">🤝</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300 text-sm lg:text-base">
                Sem Perguntas
              </div>
              <div className="text-xs lg:text-sm text-green-600 dark:text-green-400">
                Processo simples e rápido
              </div>
            </motion.div>
          </div>

          <div className="bg-white/50 dark:bg-green-950/30 rounded-xl lg:rounded-2xl p-4 lg:p-6 mt-6 lg:mt-8">
            <p className="text-green-700 dark:text-green-400 font-medium text-base lg:text-lg">
              💡 <strong>Por que oferecemos essa garantia?</strong>
              <br />
              Porque sabemos que nossa solução funciona.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
