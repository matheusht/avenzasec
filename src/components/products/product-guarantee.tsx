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
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-green-950/30 rounded-3xl p-8 lg:p-12 border-2 border-green-200 dark:border-green-800 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 opacity-50" />

        <div className="relative text-center space-y-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-3xl">🛡️</span>
            </div>
            <GradientHeading
              size="lg"
              className="text-green-800 dark:text-green-300"
            >
              Garantia Total de Resultados
            </GradientHeading>
          </div>

          <p className="text-xl text-green-700 dark:text-green-400 font-semibold leading-relaxed max-w-2xl mx-auto">
            30 dias de garantia incondicional. Se nossa solução não aumentar
            seus leads qualificados, devolvemos 100% do seu investimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-2xl">✅</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300">
                Sem Riscos
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Teste por 30 dias completos
              </div>
            </motion.div>

            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-2xl">💰</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300">
                Reembolso Total
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                100% do valor de volta
              </div>
            </motion.div>

            <motion.div
              className="space-y-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <div className="font-bold text-green-800 dark:text-green-300">
                Sem Perguntas
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Processo simples e rápido
              </div>
            </motion.div>
          </div>

          <div className="bg-white/50 dark:bg-green-950/30 rounded-2xl p-6 mt-8">
            <p className="text-green-700 dark:text-green-400 font-medium text-lg">
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
