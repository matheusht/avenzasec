"use client"

import { OrganicButton } from "@/components/cult/organic-button"

export const HeaderButtons = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu site e gostaria de conversar sobre um projeto."
    )
    const whatsappUrl = `https://wa.me/5544999522514?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      className="hidden md:block top-12 absolute right-12 md:right-24 "
      onClick={handleWhatsAppClick}
    style={{ cursor: "pointer" }}
    >
      <OrganicButton label="começar" />
    </div>
  )
}
