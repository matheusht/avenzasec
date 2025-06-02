"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export const ProductGallery = ({
  images,
  productName,
}: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="aspect-square overflow-hidden rounded-2xl lg:rounded-3xl bg-muted relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={images[selectedImage]}
            alt={`${productName} - Image ${selectedImage + 1}`}
            className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm font-medium text-black">
              {selectedImage + 1} de {images.length}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 lg:gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`aspect-square overflow-hidden rounded-lg lg:rounded-xl border-2 transition-all duration-300 ${
              selectedImage === index
                ? "border-primary shadow-xl scale-105 ring-4 ring-primary/20"
                : "border-border hover:border-primary/50 hover:shadow-lg hover:scale-102"
            }`}
            onClick={() => setSelectedImage(index)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
