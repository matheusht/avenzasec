"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"

interface WhatsAppContactProps {
  productName: string
  price: number
  originalPrice: number
}

export const WhatsAppContact = ({
  productName,
  price,
  originalPrice,
}: WhatsAppContactProps) => {
  const whatsappNumber = "5544999522514"

  const handleWhatsAppRedirect = () => {
    const message = `Olá! Tenho interesse em ${productName}. Gostaria de saber mais detalhes.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <FadeIn delay={0.3}>
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <GradientHeading size="xl" className="leading-tight">
                💬 Converse com um especialista
              </GradientHeading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Descubra como nossa solução pode transformar seus resultados.
                Agende uma conversa gratuita e veja a diferença que landing
                pages profissionais fazem.
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card/95 to-card/90 rounded-3xl p-8 lg:p-12 border shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

              <div className="relative space-y-8">
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppRedirect}
                    className="text-xl px-12 py-8 font-bold bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/95 hover:to-accent/90 shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">💬</span>
                      Falar com especialista agora
                    </span>
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-6 border-t border-primary/10">
                  <div className="space-y-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div className="font-semibold">Consulta Gratuita</div>
                    <div className="text-sm text-muted-foreground">
                      15 minutos para entender suas necessidades
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div className="font-semibold">Resposta Imediata</div>
                    <div className="text-sm text-muted-foreground">
                      Atendimento em até 30 minutos
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div className="font-semibold">Solução Personalizada</div>
                    <div className="text-sm text-muted-foreground">
                      Estratégia feita para seu negócio
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                  <p className="text-center font-medium text-foreground">
                    <span className="text-primary font-bold">
                      Preço especial por tempo limitado:
                    </span>{" "}
                    R$ {price.toLocaleString()}
                    <span className="text-muted-foreground line-through ml-2">
                      R$ {originalPrice.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
