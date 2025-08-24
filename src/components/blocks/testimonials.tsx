"use client";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "A Avenza transformou nossa segurança como startup de IA. Como empresa que lida com dados sensíveis de marketing, precisávamos de uma solução robusta que nos permitisse escalar com confiança. A implementação foi rápida e eficiente.",
    image: "/fabio.jpeg",
    name: "Fabio Brand",
    role: "Founder & CEO @ sagui.ai",
  },
  {
    text: "A equipe da Avenza é excepcional em segurança. Eles não só identificaram nossas brechas, mas também treinaram nossa equipe em melhores práticas.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Luciano Souza",
    role: "Lider no Segmento Imobiliário @ Luciano Souza Imóveis",
  },
  {
    text: "Implementar a estratégia de segurança da Avenza foi fundamental para nossa conformidade com LGPD. Agora temos controle total sobre nossos dados.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Otto Gassmann",
    role: "CEO @ Oriquimica & Oriagro",
  },
  {
    text: "A postura de segurança da Avenza é incomparável. Eles transformaram nossa infraestrutura de TI de vulnerável a fortemente protegida.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Bruno Davidoff",
    role: "Founder @ CampoMobi",
  },
  {
    text: "Marketing digital é o meu forte, e a Avenza me ajudou a melhorar ainda mais minha performance.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Isabela Favarão",
    role: "Diretora de Marketing @ Marketisa",
  },
  {
    text: "A Avenza transformou nossa postura de segurança. Eliminamos 90% das vulnerabilidades críticas e implementamos monitoramento contínuo",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Giancarlo Voltolini",
    role: "Fullstack Founder @ Wearfy",
  },
  {
    text: "A comunicação entre a nossa equipe e a Avenza foi muito clara, entregaram reports detalhadaos e remediações de forma rápida e eficiente.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "João Sberse",
    role: "Desenvolvedor Web @ Marketisa",
  },
  {
    text: "Precisava de uma solução que fizesse passar na Compliance & Auditoria, agora podemos justifiar nossos gastos pra investidores!",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Edvaldo Theodoro",
    role: "Founder @ Pare Verde",
  },
  {
    text: "A consultoria estratégica da Avenza encaixou perfeitamente em nosso SaaS, agora podemos escalar sem se preocupar com a segurança!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Marcio Gabriel",
    role: "Founder @ seumimo.com",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto"
        >

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 max-w-3xl">
            O que nossos clientes dizem
          </h2>
          <p className="text-center mt-5 opacity-75">
            Clientes que confiam na Avenza e obtiveram resultados extraordinários
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
