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
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'editorial',
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    }),
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}, {type: 'image'}],
      group: 'editorial',
    },
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
