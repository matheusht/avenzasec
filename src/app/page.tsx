import { Contact } from "@/components/cult/contact"

import LandingPageLayout from "./_layout"
import { Projects } from "./_sections/features"
import { Hero } from "./_sections/hero"

export default function LandingPage({}) {
  return (
    <LandingPageLayout
      hero={<Hero />}
      feature={<Projects />}
      contact={<Contact />}
    />
  )
}
