"use client";
import React from "react";
import { motion } from "motion/react";
import { GradientHeading } from "../cult/gradient-heading";

const testimonials = [
  {
    text: "A Avenza transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos nossas vendas em 250% e conseguimos fechar mais de 50 imóveis.",
    image: "/imobiliaria/fabio.jpeg",
    name: "Fábio",
    role: "Founder & CEO @sagui.ai"
  },
  {
    text: "A equipe da Avenza é incrível! Eles entenderam perfeitamente nossas necessidades e criaram uma solução que superou todas as expectativas.",
    image: "/imobiliaria/luciano.jpg",
    name: "Luciano Silva",
    role: "CEO - Imobiliária Silva"
  },
  {
    text: "Finalmente encontramos uma agência que entrega resultados reais. Nossa carteira de clientes cresceu 300% no primeiro ano de parceria.",
    image: "/imobiliaria/luciano.jpg",
    name: "Otto Gassmann",
    role: "CEO @oriagro.com.br"
  },
  {
    text: "A Avenza não só criou nosso site, mas também nos ensinou como usar o digital para vender mais. Resultados impressionantes!",
    image: "/imobiliaria/luciano.jpg",
    name: "Bruno Davidoff",
    role: "CSO @Pare Verde"
  },
  {
    text: "Profissionalismo e resultados são as palavras que definem a Avenza. Eles transformaram nosso negócio completamente.",
    image: "/imobiliaria/luciano.jpg",
    name: "Roberto Lima",
    role: "Fundador - Lima Imobiliária"
  },
  {
    text: "Investir na Avenza foi a melhor decisão que tomamos. ROI de 500% no primeiro ano e crescimento contínuo desde então.",
    image: "/imobiliaria/luciano.jpg",
    name: "Fernanda Rocha",
    role: "Diretora - Rocha Imóveis"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading size="lg" className="mb-6">
            O que nossos clientes dizem
          </GradientHeading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Imobiliárias que confiam na Avenza e obtiveram resultados extraordinários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="h-96 overflow-hidden">
            <TestimonialsColumn testimonials={testimonials} duration={15} />
          </div>
          <div className="h-96 overflow-hidden">
            <TestimonialsColumn testimonials={testimonials} duration={20} />
          </div>
          <div className="h-96 overflow-hidden">
            <TestimonialsColumn testimonials={testimonials} duration={25} />
          </div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 mt-16"
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
    </section>
  );
};