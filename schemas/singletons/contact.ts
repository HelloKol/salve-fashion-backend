import {InfoOutlineIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

const TITLE = 'Contact'

export default defineType({
  name: 'contact',
  type: 'document',
  title: TITLE,
  icon: InfoOutlineIcon,
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
      group: 'editorial',
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    }),
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    // Subtitle
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'editorial',
    }),
    defineField({
      name: 'blockAccordion',
      type: 'module.accordion',
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
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
