import { Contact } from "@/components/cult/contact"

import LandingPageLayout from "./_layout"
import { Projects } from "./_sections/features"
import { Hero } from "./_sections/hero"
import { Team } from "./_sections/team"

export default function LandingPage({}) {
  return (
    <LandingPageLayout
      hero={<Hero />}
      feature={<Projects />}
      team={<Team />}
      contact={<Contact />}
    />
  )
}
