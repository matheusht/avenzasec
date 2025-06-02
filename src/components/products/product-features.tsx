"use client"

import { motion } from "framer-motion"

import { GradientHeading } from "@/components/cult/gradient-heading"

interface ProductFeaturesProps {
  features: string[]
  benefits: string[]
}

export const ProductFeatures = ({
  features,
  benefits,
}: ProductFeaturesProps) => {
  const comparisons = [
    {
      title: "Posts no Facebook/Instagram",
      problems: [
        "❌ Informações limitadas por post",
        "❌ Dificulta qualificação de leads",
        "❌ Sem análise de dados precisa",
        "❌ Aparência amadora",
      ],
    },
    {
      title: "Nossa Solução Profissional",
      solutions: [
        "✅ Página completa com todos os detalhes",
        "✅ Leads chegam pré-qualificados",
        "✅ Analytics detalhados de cada visitante",
        "✅ Design profissional que transmite confiança",
      ],
    },
  ]

  const competitiveAdvantages = [
    {
      icon: "🎯",
      title: "Leads 5x mais qualificados",
      description:
        "Visitantes usam a calculadora e chegam sabendo exatamente o que podem pagar",
    },
    {
      icon: "⚡",
      title: "Conversão 350% maior",
      description:
        "Páginas profissionais convertem muito mais que posts em redes sociais",
    },
    {
      icon: "📊",
      title: "Dados precisos dos interessados",
      description:
        "Saiba exatamente quem visitou, tempo de permanência e nível de interesse",
    },
    {
      icon: "🚀",
      title: "Implementação imediata",
      description:
        "Enquanto concorrentes perdem tempo com posts, você já está vendendo mais",
    },
    {
      icon: "💰",
      title: "ROI comprovado",
      description: "Investimento se paga em 30 dias com o aumento de vendas",
    },
    {
      icon: "🔄",
      title: "Funciona 24/7",
      description: "Seus imóveis vendem mesmo quando você está dormindo",
    },
  ]

  return (
    <div className="space-y-12 lg:space-y-20">
      <div className="text-center">
        <GradientHeading size="lg" className="mb-4 lg:mb-6">
          Por que nossa solução é superior?
        </GradientHeading>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Pare de competir com posts básicos. Veja a diferença entre o que você
          faz hoje e o que deveria estar fazendo
        </p>
      </div>

      <motion.div
        className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-4 lg:space-y-6">
          <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl lg:rounded-3xl border-2 border-red-200 dark:border-red-800">
            <h3 className="text-xl lg:text-2xl font-bold text-red-700 dark:text-red-400 mb-4 lg:mb-6">
              {comparisons[0].title}
            </h3>
            <div className="space-y-3 lg:space-y-4">
              {comparisons[0].problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="text-left p-3 lg:p-4 bg-white/50 dark:bg-red-950/30 rounded-lg lg:rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-red-600 dark:text-red-400 font-medium text-sm lg:text-base">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-6">
          <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl lg:rounded-3xl border-2 border-green-200 dark:border-green-800">
            <h3 className="text-xl lg:text-2xl font-bold text-green-700 dark:text-green-400 mb-4 lg:mb-6">
              {comparisons[1].title}
            </h3>
            <div className="space-y-3 lg:space-y-4">
              {comparisons[1].solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="text-left p-3 lg:p-4 bg-white/50 dark:bg-green-950/30 rounded-lg lg:rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-green-600 dark:text-green-400 font-medium text-sm lg:text-base">
                    {solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8 lg:space-y-12">
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
            🏆 Vantagens Competitivas
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground">
            Por que imobiliárias que usam nossa solução vendem mais que a
            concorrência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="text-center p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-card to-card/70 border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-accent rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                <span className="text-2xl lg:text-3xl">{advantage.icon}</span>
              </div>
              <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">
                {advantage.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />

        <GradientHeading size="md" className="mb-4 lg:mb-6">
          🚀 O resultado? Vendas que crescem sozinhas
        </GradientHeading>
        <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 lg:mb-8 leading-relaxed">
          Enquanto seus concorrentes ainda dependem de posts básicos e
          atendimento manual, você estará gerando leads qualificados
          automaticamente, 24 horas por dia.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-xs lg:text-sm">
          <div className="space-y-1 lg:space-y-2">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              350%
            </div>
            <div className="font-semibold">+ leads qualificados</div>
          </div>
          <div className="space-y-1 lg:space-y-2">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              24h
            </div>
            <div className="font-semibold">Funcionamento contínuo</div>
          </div>
          <div className="space-y-1 lg:space-y-2">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              5x
            </div>
            <div className="font-semibold">+ conversões</div>
          </div>
          <div className="space-y-1 lg:space-y-2">
            <div className="text-2xl lg:text-3xl font-bold text-primary">
              30dias
            </div>
            <div className="font-semibold">ROI garantido</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
