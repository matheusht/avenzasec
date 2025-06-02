import { GradientHeading } from "@/components/cult/gradient-heading"

interface ProductInfoProps {
  product: {
    name: string
    subtitle: string
    price: number
    originalPrice: number
    description: string
    features: string[]
  }
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  const monthlyPrice = Math.floor((product.price / 12) * 10) / 10
  const originalMonthlyPrice = Math.round(product.originalPrice / 12)

  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="space-y-4 lg:space-y-6">
        <GradientHeading size="lg" className="mb-2 lg:mb-4 leading-tight">
          {product.name}
        </GradientHeading>
        <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
          {product.subtitle}
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 rounded-2xl lg:rounded-3xl p-6 lg:p-8 space-y-4 lg:space-y-6 border border-primary/10 relative">
        <span className="absolute -top-3 -right-3 bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg">
          Plano Anual • -{discount}% OFF por tempo limitado
        </span>
        <div className="flex items-baseline gap-4 lg:gap-6 flex-wrap">
          <div className="space-y-1 lg:space-y-2">
            <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-brand">
              R$ {monthlyPrice.toFixed(2)}
            </span>
            <span className="text-base lg:text-lg text-muted-foreground block">
              /mês no plano anual
            </span>
          </div>
          <div className="space-y-1 lg:space-y-2">
            <span className="text-lg lg:text-xl text-muted-foreground line-through block">
              R$ {originalMonthlyPrice.toLocaleString()}/mês
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:space-y-6">
        <h3 className="text-xl lg:text-2xl font-bold">💡 Sobre a Solução</h3>
        <p className="text-foreground leading-relaxed text-base lg:text-lg font-medium bg-muted/30 p-4 lg:p-6 rounded-xl lg:rounded-2xl border-l-4 border-primary">
          {product.description}
        </p>
      </div>
    </div>
  )
}
