import { BeakerIcon } from '@heroicons/react/16/solid'
import { groq } from 'next-sanity'
import { defineField, defineType } from 'sanity'
import { apiVersion } from '../env'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: BeakerIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) =>
        Rule.required().error('A slug is required for the post URL.'),
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom(async (isFeatured, { getClient }) => {
          if (isFeatured !== true) {
            return true
          }

          let featuredServices = await getClient({ apiVersion })
            .withConfig({ perspective: 'previewDrafts' })
            .fetch(groq`count(*[_type == 'service' && isFeatured == true])`)

          return featuredServices > 3
            ? 'Only 3 posts can be featured at a time.'
            : true
        }),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      isFeatured: 'isFeatured',
    },
    prepare({ title, media, isFeatured }) {
      return {
        title,
        subtitle: isFeatured ? 'Featured' : '',
        media,
      }
    },
  },
  orderings: [
    {
      name: 'isFeaturedAndSortOrder',
      title: 'Featured & Sort Order',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: 'sortOrder', direction: 'asc' }, // Assuming ascending sort order for lower numbers.
      ],
    },
  ],
})
