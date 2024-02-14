import {BulbOutlineIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.categories',
  title: 'Categories',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // Images
    defineField({
      name: 'blockImages',
      title: 'Images',
      type: 'module.images',
    }),
    // Link
    defineField({
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      text: 'text',
      url: 'url',
    },
    prepare(selection) {
      const {text, url} = selection
      return {
        subtitle: 'Product Feed',
        title: text,
        media: BulbOutlineIcon,
      }
    },
  },
})
