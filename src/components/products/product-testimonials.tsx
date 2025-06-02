"use client"

import { motion } from "framer-motion"

import { GradientHeading } from "@/components/cult/gradient-heading"

interface Testimonial {
  name: string
  company: string
  content: string
  avatar: string
  results?: string
}

interface ProductTestimonialsProps {
  testimonials: Testimonial[]
}

export const ProductTestimonials = ({
  testimonials,
}: ProductTestimonialsProps) => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <GradientHeading size="lg" className="mb-6">
          Resultados reais de imobiliárias que confiam em nós
        </GradientHeading>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          já aumentaram suas vendas com nossa solução
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-3xl border bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />

            <div className="absolute -top-2 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            <div className="pt-8 space-y-6 relative">
              <p className="text-lg leading-relaxed font-medium">
                {testimonial.content}
              </p>

              {testimonial.results && (
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-primary font-semibold text-center">
                    📈 {testimonial.results}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-primary mb-2 font-brand">
              100%
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Garantia de Resultados
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-primary mb-2 font-brand">
              350%
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Aumento Médio em Leads
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-primary mb-2 font-brand">
              4.9
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Avaliação Média
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-primary mb-2 font-brand">
              24h
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              Primeiro Resultado
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
