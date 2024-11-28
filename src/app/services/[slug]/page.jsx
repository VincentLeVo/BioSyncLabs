import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { image } from '@/sanity/image'
import { getPost, getService } from '@/sanity/queries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  let post = await getService(params.slug)

  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function BlogPost({ params }) {
  let post = (await getService(params.slug)) || notFound()

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container className="bg-slate-200/50">
        <Navbar />

        <div className="mt-20 grid grid-cols-1 gap-y-12 md:grid-cols-[1fr_1.25fr] md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {Array.isArray(post.categories) && (
              <div className="mb-6 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/blog?category=${category.slug}`}
                    className="text-md/6 rounded-full border border-dotted border-blue-400 bg-blue-50 px-2 font-medium text-blue-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
            <Heading as="h1">{post.title}</Heading>
            <div className="mt-14 text-lg text-gray-600">{post.excerpt}</div>
            <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start"></div>
          </div>
          {post.mainImage && (
            <img
              alt={post.mainImage.alt || ''}
              src={image(post.mainImage).size(2016, 1344).url()}
              className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
            />
          )}
        </div>
      </Container>
      <Container className="py-24">
        <div className="mx-auto max-w-2xl">
          {post.body && (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mb-10 mt-12 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                      {children}
                    </blockquote>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <img
                      alt={value.alt || ''}
                      src={image(value).width(2000).url()}
                      className="w-full rounded-2xl"
                    />
                  ),
                  separator: ({ value }) => {
                    switch (value.style) {
                      case 'line':
                        return <hr className="my-8 border-t border-gray-200" />
                      case 'space':
                        return <div className="my-8" />
                      default:
                        return null
                    }
                  },
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => {
                    return (
                      <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                    )
                  },
                  number: ({ children }) => {
                    return (
                      <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                    )
                  },
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-950">
                      {children}
                    </strong>
                  ),
                  code: ({ children }) => (
                    <>
                      <span aria-hidden>`</span>
                      <code className="text-[15px]/8 font-semibold text-gray-950">
                        {children}
                      </code>
                      <span aria-hidden>`</span>
                    </>
                  ),
                  link: ({ value, children }) => {
                    return (
                      <Link
                        href={value.href}
                        className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                      >
                        {children}
                      </Link>
                    )
                  },
                },
              }}
            />
          )}
          <div className="">
            <Button variant="outline" href="/services">
              <ChevronLeftIcon className="size-4" />
              Back to services
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
