'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'

export default function Page() {
  return (
    <main className="bg-neutral-100">
      <Container>
        <Navbar />
        <Subheading className="mt-16">Services</Subheading>
        <Heading as="h1" className="mt-2">
          High Quality Services for Your Health
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Your health starts with clarity. Our general laboratory services
          provide precise diagnostic testing to help monitor and maintain your
          well-being.
        </Lead>
      </Container>
      <div className="mt-8 pb-24">
        <Services title="General Services" category="general-health" />
        <Services title="Respiratory Services" category="respiratory-health" />
        <Services title="Sexual-Health Services" category="sexual-health" />
      </div>
      <Footer />
    </main>
  )
}
