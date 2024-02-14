import {InfoOutlineIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

const TITLE = 'Shop'

export default defineType({
  name: 'shop',
  type: 'document',
  title: TITLE,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      group: 'editorial',
      // @ts-ignore - TODO - fix this TS error
      // validation: validateSlug,
    }),
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
    }),
    // Subtitle
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'editorial',
    }),
    // Body
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    }),
    defineField({
      title: 'Suggested Search',
      name: 'suggestedSearch',
      type: 'array',
      of: [{type: 'string'}],
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      subtitle: 'subtitle',
    },
    prepare(selection) {
      const {subtitle} = selection
      return {
        title: subtitle,
      }
    },
  },
})