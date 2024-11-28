import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Company',
  description:
    'We’re on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">
        Empowering Better Health with Accurate Diagnostics
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        At BioSync Lab, our mission is to provide cutting-edge diagnostic
        solutions that improve health outcomes for patients and healthcare
        providers. We offer a comprehensive range of laboratory services with
        accuracy, speed, and care.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            BioSync Lab is dedicated to transforming healthcare through
            state-of-the-art diagnostic testing and data-driven insights. Our
            mission is to empower healthcare professionals with timely, reliable
            results, enabling them to make informed decisions for their
            patients.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We prioritize patient care by combining advanced technology with a
            compassionate approach. Every test we conduct is driven by a
            commitment to improving patient outcomes and supporting the
            healthcare ecosystem.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Tests Conducted</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={500} end={750} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Patients Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={100} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Healthcare Partners</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={500} end={650} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Specialized Tests</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={150} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="my-32">
      <Subheading>Meet the Team</Subheading>
      <Heading as="h3" className="mt-2">
        Experts Dedicated to Innovation in Healthcare
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        BioSync Lab was founded by a group of healthcare and biotech experts
        committed to revolutionizing diagnostics through innovation and
        cutting-edge technology.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Our founding team comes from diverse backgrounds, combining years of
            expertise in clinical research, laboratory management, and
            healthcare solutions. Together, they built BioSync Lab to address
            the growing demand for precision diagnostics and personalized
            healthcare solutions.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, BioSync Lab supports thousands of healthcare providers and
            patients with trusted diagnostic services, offering a wide range of
            tests designed to meet the highest standards of accuracy and
            reliability.
          </p>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Footer />
    </main>
  )
}
