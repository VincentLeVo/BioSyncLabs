import { defineQuery } from 'next-sanity'
import { sanityFetch } from './client'

const TOTAL_POSTS_QUERY = defineQuery(/* groq */ `count(*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`)

export async function getPostsCount(category) {
  return await sanityFetch({
    query: TOTAL_POSTS_QUERY,
    params: { category: category ?? null },
  })
}

const POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getPosts(startIndex, endIndex, category) {
  return await sanityFetch({
    query: POSTS_QUERY,
    params: {
      startIndex,
      endIndex,
      category: category ?? null,
    },
  })
}

const ALL_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
    && select(defined($category) => $category in categories[]->slug.current, true)
]|order(publishedAt desc)[$startIndex...$endIndex]{
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getAllPosts(startIndex, endIndex, category) {
  return await sanityFetch({
    query: ALL_POSTS_QUERY,
    params: {
      startIndex,
      endIndex,
      category: category ?? null,
    },
  })
}

const FEATURED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`)

export async function getFeaturedPosts(quantity) {
  return await sanityFetch({
    query: FEATURED_POSTS_QUERY,
    params: { quantity },
  })
}

const FEED_POSTS_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
  },
}`)

export async function getPostsForFeed() {
  return await sanityFetch({
    query: FEED_POSTS_QUERY,
  })
}

const POST_QUERY = defineQuery(/* groq */ `*[
  _type == "post"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}
`)

export async function getPost(slug) {
  return await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  })
}

// CATEGORIES

const CATEGORIES_QUERY = defineQuery(/* groq */ `*[
  _type == "category"
  && count(*[_type == "post" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`)

export async function getCategories() {
  return await sanityFetch({
    query: CATEGORIES_QUERY,
  })
}

// SERVICES

const TOTAL_SERVICES_QUERY = defineQuery(/* groq */ `count(*[
  _type == "service"
  && defined(slug.current)
  && (isFeatured != true || defined($category))
  && select(defined($category) => $category in categories[]->slug.current, true)
])`)

export async function getServicesCount(category) {
  return await sanityFetch({
    query: TOTAL_SERVICES_QUERY,
    params: { category: category ?? null },
  })
}

const FEATURED_SERVICES_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && isFeatured == true
  && defined(slug.current)
]|order(sortOrder asc)[0...$quantity]{
  title,
  "slug": slug.current,
  mainImage,
  excerpt,
  body,
  categories[]->{
    title,
    "slug": slug.current
  }
}`)

export async function getFeaturedServices(quantity) {
  return await sanityFetch({
    query: FEATURED_SERVICES_QUERY,
    params: { quantity },
  })
}

const SERVICE_BY_SLUG_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && slug.current == $slug
][0]{
  title,
  mainImage,
  excerpt,
  body,
  categories[]->{
    title,
    "slug": slug.current
  }
}`)

export async function getService(slug) {
  return await sanityFetch({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug },
  })
}

const SERVICES_BY_CATEGORY_QUERY = defineQuery(/* groq */ `
*[
  _type == "service" 
  && $categorySlug in categories[]->slug.current
] | order(sortOrder asc) {
  title,
  "slug": slug.current,
  excerpt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  isFeatured,
  sortOrder,
  categories[]->{
    title,
    slug
  }
}`)

export async function getServicesByCategory(categorySlug) {
  return await sanityFetch({
    query: SERVICES_BY_CATEGORY_QUERY,
    params: { categorySlug },
  })
}

const ALL_SERVICES_QUERY = defineQuery(/* groq */ `
  *[_type == "service"]
  | order(isFeatured desc, sortOrder asc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    body,
    isFeatured,
    sortOrder,
    categories[]->{
      title,
      "slug": slug.current
    }
  }
`)

export async function getAllServices() {
  return await sanityFetch({
    query: ALL_SERVICES_QUERY,
  })
}
