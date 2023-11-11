import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export default defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
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
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}, {type: 'image'}],
      group: 'editorial',
    },
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
      group: 'editorial',
    }),
    // Collections
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [
        {
          name: 'collection',
          title: 'Collection',
          type: 'reference',
          weak: true,
          to: [{type: 'collection'}],
          validation: (Rule) => Rule.required(),
        },
      ],
      group: 'editorial',
    }),
    // Modules
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: 'module.callToAction'},
        {type: 'module.image'},
        {type: 'module.instagram'},
        {type: 'module.product'},
      ],
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
        // media: icon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
