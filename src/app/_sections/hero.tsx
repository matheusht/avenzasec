"use client"

import { LayoutGroup, motion } from "framer-motion"

import { TextRotate } from "@/components/ui/text-rotate"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import Floating, { FloatingElement } from "@/components/parallax-floating"

const exampleImages = [
  {
    url: "https://plus.unsplash.com/premium_photo-1747769554829-509fc9395e53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    url: "https://images.unsplash.com/photo-1624344965199-ed40391d20f2?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://images.unsplash.com/photo-1748351970583-327f50884b5d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
]

const floatingElements = [
  {
    imageIndex: 1,
    depth: 1,
    position:
      "top-[8%] left-[5%] sm:top-[5%] sm:left-[8%] md:top-[0%] md:left-[16%] lg:top-[2%] lg:left-[18%] xl:top-[5%] xl:left-[20%]",
    size: "w-64 h-64 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96",
    rotation: "-rotate-12",
    delay: 0.7,
  },
  {
    imageIndex: 2,
    depth: 4,
    position:
      "top-[75%] left-[2%] sm:top-[80%] sm:left-[4%] md:top-[80%] md:left-[8%] lg:top-[90%] lg:left-[10%] xl:top-[80%] xl:left-[12%]",
    size: "w-72 h-96 sm:w-72 sm:h-72 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
    rotation: "-rotate-[4deg]",
    delay: 0.9,
  },
  {
    imageIndex: 3,
    depth: 2,
    position:
      "top-[5%] left-[75%] sm:top-[8%] sm:left-[70%] md:top-[2%] md:left-[83%] lg:top-[5%] lg:left-[80%] xl:top-[8%] xl:left-[77%]",
    size: "w-32 h-32 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-72 lg:h-64 xl:w-80 xl:h-72",
    rotation: "rotate-[6deg]",
    delay: 1.1,
  },
  {
    imageIndex: 4,
    depth: 1,
    position:
      "top-[75%] left-[70%] sm:top-[78%] sm:left-[68%] md:top-[68%] md:left-[83%] lg:top-[62%] lg:left-[80%] xl:top-[58%] xl:left-[77%]",
    size: "w-64 h-64 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96",
    rotation: "rotate-[19deg]",
    delay: 1.3,
  },
  {
    imageIndex: 0,
    depth: 3,
    position:
      "top-[35%] left-[55%] sm:top-[38%] sm:left-[28%] md:top-[50%] md:left-[40%] lg:top-[48%] lg:left-[42%] xl:top-[45%] xl:left-[45%]",
    size: "w-72 h-72 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96",
    rotation: "rotate-[20deg]",
    delay: 1.5,
  },
  {
    imageIndex: 5,
    depth: 3,
    position:
      "hidden md:block top-[30%] left-[60%] sm:top-[48%] sm:left-[58%] md:top-[40%] md:left-[65%] lg:top-[38%] lg:left-[62%] xl:top-[35%] xl:left-[58%]",
    size: "w-72 h-72 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80",
    rotation: "rotate-[-8deg]",
    delay: 1.5,
  },
]

export function Hero() {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="block">
        <Floating sensitivity={-0.5} className="h-full">
          {floatingElements.map((element, index) => (
            <FloatingElement
              key={index}
              depth={element.depth}
              className={element.position}
            >
              <motion.img
                src={exampleImages[element.imageIndex].url}
                alt={exampleImages[element.imageIndex].title}
                className={`${element.size} object-cover hover:scale-105 duration-200 cursor-pointer transition-transform ${element.rotation} shadow-2xl rounded-xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: element.delay }}
              />
            </FloatingElement>
          ))}
        </Floating>
      </div>

      <div className="absolute top-[calc(100vh-260px)] md:top-56 lg:top-64 xl:top-72 z-[9999] md:left-16 lg:left-20 xl:left-24 w-full md:w-auto pr-4">
        <FadeIn>
          <GradientHeading
            className="flex items-end justify-end md:justify-start flex-col text-right md:text-left"
            size="xxl"
            asChild
          >
            <h1 className="md:hidden font-black text-5xl">
              Transforme <br />
              suas <br />
              <span className="font-brand text-6xl sr-only">ideias</span>
            </h1>
            <h1 className="hidden md:flex items-center font-semibold flex-col text-[8rem] lg:text-[10rem] xl:text-[12.5rem] pb-4">
              Transforme <br /> suas <br />
              <span className="font-brand pt-9 sr-only">ideias</span>
            </h1>
          </GradientHeading>
        </FadeIn>
      </div>

      <div className="absolute top-[calc(100vh-160px)] right-4 md:hidden">
        <FadeIn>
          <LayoutGroup>
            <motion.div
              layout
              className="flex whitespace-pre font-brand text-6xl justify-end"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              <TextRotate
                texts={["ideias", "visões", "criações"]}
                mainClassName="overflow-hidden"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.div>
          </LayoutGroup>
        </FadeIn>
      </div>

      <div className="hidden md:block absolute top-[calc(100vh-420px)] right-7">
        <FadeIn>
          <LayoutGroup>
            <motion.div
              layout
              className="flex whitespace-pre font-brand pt-9 text-[8rem] lg:text-[10rem] xl:text-[12.5rem]"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              <TextRotate
                texts={["ideias", "visões", "criações"]}
                mainClassName="overflow-hidden"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.div>
          </LayoutGroup>
        </FadeIn>
      </div>
    </div>
  )
}
