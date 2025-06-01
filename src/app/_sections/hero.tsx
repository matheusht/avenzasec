"use client"

import { LayoutGroup, motion } from "framer-motion"

import { TextRotate } from "@/components/ui/text-rotate"
import { BackgroundMedia } from "@/components/cult/background-media"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import Floating, { FloatingElement } from "@/components/parallax-floating"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1727341554370-80e0fe9ad082?q=80&w=2276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1529472119196-cb724127a98e?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1698399352772-ea68ee38e2d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxEby1oZjRFdjQ0TXx8ZW58MHx8fHx8",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
]

export function Hero() {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="hidden md:block">
        <Floating sensitivity={-0.5} className="h-full">
          <FloatingElement
            depth={1}
            className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
          >
            <motion.img
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-60 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={4}
            className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
          >
            <motion.img
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={2}
            className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
          >
            <motion.img
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
          >
            <motion.img
              src={exampleImages[4].url}
              alt={exampleImages[4].title}
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={3}
            className="top-[45%] left-[70%] md:top-[40%] md:left-[65%]"
          >
            <motion.img
              src={exampleImages[5].url}
              alt={exampleImages[5].title}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[-8deg] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
          </FloatingElement>
        </Floating>
      </div>

      <div className="md:hidden">
        <FadeIn>
          <BackgroundMedia src="/Clay-1.png" alt="blob image of brain" />
        </FadeIn>
      </div>

      <div className="absolute top-[calc(100vh-260px)] md:top-56 z-[9999] md:left-16 w-full md:w-auto pr-4">
        <FadeIn>
          <GradientHeading
            className="flex items-end justify-end md:justify-start flex-col text-right md:text-left"
            size="xxl"
            asChild
          >
            <h1 className="md:hidden font-black text-5xl">
              Transforme <br />
              suas <br />
              <LayoutGroup>
                <motion.span
                  layout
                  className="flex whitespace-pre font-brand text-6xl justify-end"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  <TextRotate
                    texts={[
                      "ideias",
                      "visões",
                      "sonhos",
                      "projetos",
                      "criações",
                      "conceitos",
                      "inspirações",
                    ]}
                    mainClassName="overflow-hidden"
                    staggerDuration={0.03}
                    staggerFrom="last"
                    rotationInterval={3000}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                </motion.span>
              </LayoutGroup>
            </h1>
            <h1 className="hidden md:flex items-center font-semibold flex-col text-[12.5rem] pb-4">
              Transforme <br /> suas <br />
              <span className="font-brand pt-9 sr-only">ideias</span>
            </h1>
          </GradientHeading>
        </FadeIn>
      </div>

      <div className="hidden md:block absolute top-[calc(100vh-530px)] right-7">
        <LayoutGroup>
          <motion.div
            layout
            className="flex whitespace-pre font-brand pt-9 md:text-[12.5rem]"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <TextRotate
              texts={["ideias", "visões", "criações", "inspirações"]}
              mainClassName="overflow-hidden"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  )
}
