"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"

import { Balloons, type BalloonsRef } from "./balloons"
import { GradientHeading } from "./gradient-heading"

export function Contact() {
  const balloonsRef = React.useRef<BalloonsRef>(null)
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const [hasTriggeredBalloons, setHasTriggeredBalloons] = React.useState(false)

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (isInView && balloonsRef.current && !hasTriggeredBalloons) {
      const timer = setTimeout(() => {
        balloonsRef.current?.launchAnimation()
        setHasTriggeredBalloons(true)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [isInView, hasTriggeredBalloons])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu site e gostaria de conversar sobre um projeto."
    )
    const whatsappUrl = `https://wa.me/5544999875357?text=${message}`
    window.open(whatsappUrl, "_blank")

    if (balloonsRef.current && !hasTriggeredBalloons) {
      balloonsRef.current.launchAnimation()
      setHasTriggeredBalloons(true)
    }
  }

  return (
    <div className="pb-12 pt-14 relative" ref={sectionRef}>
      <Balloons
        ref={balloonsRef}
        type="text"
        text="🚀  🎈  🚀  🎈 🚀"
        fontSize={80}
      />

      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <GradientHeading
            size="xl"
            weight="black"
            className="mb-6  text-center"
            variant="lightSecondary"
          >
            Vamos Transformar Sua Ideia em Realidade?
          </GradientHeading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Estou pronto para desenvolver sua próxima aplicação web com as
            tecnologias mais modernas. Entre em contato e vamos conversar sobre
            seu projeto!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 items-center"
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white font-black px-16 py-8 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-6 text-2xl border-2 border-green-400/30 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MessageCircle className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="transition-transform duration-300 group-hover:scale-105">
              Falar no WhatsApp
            </span>
            <Sparkles className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-white/60 text-sm">
            Resposta em até 2 horas • Consultoria gratuita
          </p>
        </motion.div>
      </div>
    </div>
  )
}
