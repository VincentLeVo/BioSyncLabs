import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Bio Health Labs Resource Page',
  description:
    'Discover valuable resources and insights from Bio Health Labs. Sign up today and start enhancing your health knowledge.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Frequently Asked Questions</Heading>
      <Lead className="mt-6 max-w-3xl">
        Find answers to the most common questions about our services and
        platform. If you have any other questions, feel free to reach out to our
        support team.
      </Lead>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-blue-900 pt-96 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_1fr]">
          <div className="-mt-80 lg:-mt-36">
            <div className="-m-2 rounded-4xl bg-white/15 ring-1 ring-blue-950/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-blue-900/20">
                  <img
                    alt=""
                    src="/testimonials/old-person.jpg"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-10 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Thanks to BioSync, I was able to get my health back on track.
                </p>
              </blockquote>
              <figcaption className="mt-32">
                <p className="text-lg/6 font-medium text-white">Jane Wane</p>
                <p className="text-md/6 font-medium">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Retired Teacher
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              What services does [Bio Clinic Lab] offer?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              At [Bio Clinic Lab], we offer a wide range of diagnostic testing
              services, including blood tests, urine analysis, genetic testing,
              and specialized health screenings. Our state-of-the-art laboratory
              ensures accurate and timely results for both routine and
              specialized tests.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Do I need an appointment for lab tests?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              While walk-ins are welcome, we recommend scheduling an appointment
              to reduce waiting times. Appointments can be made online or by
              calling our clinic directly.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How do I prepare for my lab test?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Preparation for lab tests depends on the specific test. For blood
              tests, you may need to fast for 8-12 hours, while other tests may
              have different requirements. Our team will provide you with all
              the necessary instructions when you book your appointment.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How long does it take to receive test results?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              For most routine tests, results are available within 24-48 hours.
              Some specialized tests may take longer, typically 3-7 days. We
              will notify you when your results are ready, and they can be
              accessed online through our secure patient portal.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              How do I access my test results?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              You can access your test results online through our secure patient
              portal. You will receive an email notification when your results
              are available. If you prefer, you can also request a printed copy
              of your results at the lab.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Does [Bio Clinic Lab] accept insurance?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, [Bio Clinic Lab] works with most major insurance providers.
              Please bring your insurance information with you during your
              visit. If you&apos;re unsure about coverage, contact our billing
              department for assistance.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I pay for lab services without insurance?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolutely. We offer competitive self-pay rates for all our
              services. Payment options and pricing will be provided to you
              before your test, ensuring full transparency.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What safety measures are in place for COVID-19?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              [Bio Clinic Lab] follows strict protocols to ensure the safety of
              our patients and staff, including social distancing, regular
              sanitization of equipment, and protective gear for all staff
              members. We also offer COVID-19 testing and antibody screenings.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What should I bring to my appointment?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Please bring a valid ID, your insurance information (if
              applicable), and any test requisition forms provided by your
              healthcare provider. If you are self-paying, we accept various
              payment methods, including credit cards and electronic payments.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I speak to a professional about my results?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, our qualified healthcare professionals are available to
              discuss your test results and answer any questions. If further
              medical attention is needed, we can provide referrals to
              appropriate specialists.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function FAQ({ searchParams }) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <FrequentlyAskedQuestions />

      <Testimonial />
      <Footer />
    </main>
  )
}
