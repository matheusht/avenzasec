"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface CardProps {
  text?: string
  description?: string
  topics?: string[]
  children?: React.ReactNode
  gradient?: string
  image?: string
  price: string
  type: string
  textColor?: string
}

export function GradientCard({
  textColor = "text-white",
  gradient,
  text,
  price,
  type,
  description,
  topics,
  children,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "relative shadow-sm h-[250px] sm:h-[360px] md:h-[550px] w-full md:w-[400px] rounded-[20px] md:rounded-[28px] border border-black/5",
        textColor
      )}
      style={{
        backgroundImage: gradient,
      }}
    >
      <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-between">
        <div className="flex flex-col space-y-2 md:space-y-3">
          <p className="text-sm md:text-lg font-black leading-[1.2353641176] tracking-wide">
            {type}
          </p>

          <p className="mt-3 md:mt-6 flex items-baseline justify-start gap-x-2">
            <span className="text-2xl md:text-5xl font-bold tracking-tight flex-wrap max-w-[160px] md:max-w-[220px]">
              {price}
            </span>
          </p>

          {topics ? (
            <div className="flex flex-wrap gap-1 md:gap-2 mt-2 md:mt-4 max-w-[160px] md:max-w-[220px]">
              {topics.map((topic, index) => (
                <span
                  key={index}
                  className={cn(
                    "px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-white/20 backdrop-blur-sm border border-white/30",
                    textColor
                  )}
                >
                  {topic}
                </span>
              ))}
            </div>
          ) : (
            <p
              className={cn(
                "text-sm md:text-lg font-semibold leading-[1.2353641176] tracking-wide text-neutral-200",
                textColor
              )}
            >
              {description}
            </p>
          )}
          <p
            className={cn(
              "text-xl md:text-3xl font-black tracking-[.007em] mt-2 pr-10 md:pr-20",
              textColor
            )}
          >
            {text}
          </p>
        </div>
        {children}
      </div>
    </motion.div>
  )
}
