import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { ProductFeatures } from "@/components/products/product-features"
import { ProductGallery } from "@/components/products/product-gallery"
import { ProductGuarantee } from "@/components/products/product-guarantee"
import { ProductIncludes } from "@/components/products/product-includes"
import { ProductInfo } from "@/components/products/product-info"
import { ProductTestimonials } from "@/components/products/product-testimonials"
import { WhatsAppContact } from "@/components/products/whatsapp-contact"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

const getProductData = (slug: string) => {
  switch (slug) {
    case "imobiliarias":
      return {
        id: slug,
        name: "Página de Captura de Leads para Imobiliárias",
        subtitle:
          "Capture 10x mais leads qualificados com páginas profissionais que convertem",
        price: 1799,
        originalPrice: 3997,
        description:
          "Pare de perder clientes com anúncios no Facebook que levam para perfis genéricos! Nossa solução cria landing pages profissionais específicas para cada imóvel, com informações detalhadas, galeria interativa, calculadora de financiamento e formulários otimizados que capturam leads qualificados 24/7.",
        features: [
          "🏠 Landing page personalizada para cada imóvel",
          "📱 Design responsivo e carregamento ultrarrápido",
          "📊 Painel de analytics em tempo real",
          "🎯 Formulários otimizados para conversão",
          "📧 Integração automática com WhatsApp",
          "🗺️ Mapa interativo da localização",
          "📸 Galeria de fotos profissional",
          "📈 Relatórios detalhados de performance",
        ],
        images: [
          "/imobiliaria/img1.png",
          "/imobiliaria/img2.png",
          "/imobiliaria/img3.png",
          "/imobiliaria/img4.png",
        ],
        benefits: [
          "📈 Aumento de 350% na geração de leads qualificados",
          "🎯 Taxa de conversão 5x maior que redes sociais",
          "⏰ Captura leads 24/7 sem intervenção manual",
          "📊 Dados precisos dos interessados para follow-up",
          "🚀 Implementação em apenas 24 horas",
          "💰 ROI comprovado já no primeiro mês",
        ],
        testimonials: [
          {
            name: "Luciano Souza",
            company: "Imóveis Souza - Curitiba",
            content:
              "A diferença é absurda comparado aos posts no Facebook. Agora todo cliente chega com interesse real e dados completos.",
            avatar: "/imobiliaria/luciano.jpg",
            results: "280% mais leads em 30 dias",
          },
          {
            name: "Roberto Santos",
            company: "Santos & Associados - Rio de Janeiro",
            content:
              "O Visual foi um game changer! Os clientes chegam até nós já sabendo exatamente todas informações do imóvel.",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
            results: "40% mais vendas mensais",
          },
        ],
      }
    default:
      return {
        id: slug,
        name: "Design Premium Package",
        subtitle: "Transforme sua marca com design profissional",
        price: 2999,
        originalPrice: 4999,
        description:
          "Um pacote completo de design que inclui identidade visual, website responsivo e materiais de marketing. Perfeito para empresas que querem se destacar no mercado digital.",
        features: [
          "Identidade visual completa",
          "Website responsivo e moderno",
          "Kit de materiais de marketing",
          "Suporte técnico por 6 meses",
          "Revisões ilimitadas durante o projeto",
          "Entrega em até 30 dias",
        ],
        images: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2939&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
        ],
        benefits: [
          "Aumento de 300% na conversão",
          "Design profissional e moderno",
          "Otimizado para dispositivos móveis",
          "SEO otimizado",
        ],
        testimonials: [
          {
            name: "Ana Silva",
            company: "Tech Startup",
            content:
              "O trabalho da Avenza transformou completamente nossa presença digital. Resultados incríveis!",
            avatar:
              "https://images.unsplash.com/photo-1494790108755-2616b612b29c?q=80&w=150&h=150&auto=format&fit=crop",
          },
          {
            name: "Carlos Santos",
            company: "E-commerce Plus",
            content:
              "Profissionalismo e criatividade em cada detalho. Recomendo para qualquer empresa.",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
          },
        ],
      }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductData(slug)

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-30" />
                <div className="relative">
                  <ProductGallery
                    images={product.images}
                    productName={product.name}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ProductInfo product={product} />
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-muted/20 to-background py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <FadeIn delay={0.35}>
            <ProductIncludes features={product.features} />
          </FadeIn>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10 py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <FadeIn delay={0.38}>
            <ProductGuarantee />
          </FadeIn>
        </div>
      </div>

      <div className="bg-background py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <FadeIn delay={0.4}>
            <ProductFeatures
              features={product.features}
              benefits={product.benefits}
            />
          </FadeIn>
        </div>
      </div>

      <div className="bg-gradient-to-br from-muted/30 to-background py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <FadeIn delay={0.6}>
            <ProductTestimonials testimonials={product.testimonials} />
          </FadeIn>
        </div>
      </div>

      <WhatsAppContact
        productName={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
      />
    </div>
  )
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductData(slug)

  return {
    title: `${product.name} | Avenza`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Avenza`,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Avenza`,
      description: product.description,
      images: [product.images[0]],
    },
  } as Metadata
}
