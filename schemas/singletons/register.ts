import {UsersIcon, InfoFilledIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

const TITLE = 'Register'

export default defineType({
  name: 'register',
  type: 'document',
  title: TITLE,
  icon: UsersIcon,
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
    }),
    // Subtitle
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'editorial',
    }),
    // Content Title
    defineField({
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      description: 'Defaults for every page',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Site title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          validation: (Rule) =>
            Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
        }),
      ],
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
