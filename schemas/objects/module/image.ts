import {ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const VARIANTS = [
  {title: 'Simple', value: 'simple'},
  {title: 'Caption', value: 'caption'},
  {title: 'Call to action', value: 'callToAction'},
  {title: 'Product hotspots', value: 'productHotspots'},
  {title: 'Product tags', value: 'productTags'},
]

export default defineField({
  name: 'module.image',
  title: 'Image',
  type: 'object',
  icon: ImageIcon,
  fields: [
    // Image
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    // Variant
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: VARIANTS,
      },
      initialValue: 'simple',
    }),
    // Caption
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 2,
      hidden: ({parent}) => parent.variant !== 'caption',
    }),
    // Body
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
      hidden: ({parent}) => parent.variant !== 'simple',
    }),
    // Call to action
    defineField({
      name: 'callToAction',
      title: 'Call to action',
      type: 'object',
      fields: [
        // Title
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        // Link
        {
          name: 'links',
          title: 'Link',
          type: 'array',
          of: [{type: 'linkInternal'}, {type: 'linkExternal'}],
          validation: (Rule) => Rule.max(1),
        },
      ],
      hidden: ({parent}) => parent.variant !== 'callToAction',
    }),
    // Product hotspots
    defineField({
      name: 'productHotspots',
      title: 'Hotspots',
      type: 'productHotspots',
      hidden: ({parent}) => parent.variant !== 'productHotspots',
    }),
    // Product tags
    defineField({
      name: 'productTags',
      title: 'Products',
      type: 'array',
      hidden: ({parent}) => parent.variant !== 'productTags',
      of: [
        {
          name: 'productWithVariant',
          title: 'Product + Variant',
          type: 'productWithVariant',
        },
      ],
    }),
  ],
  preview: {
    select: {
      fileName: 'image.asset.originalFilename',
      image: 'image',
      variant: 'variant',
    },
    prepare(selection) {
      const {fileName, image, variant} = selection
      const currentVariant = VARIANTS.find((v) => v.value === variant)

      return {
        media: image,
        subtitle: 'Image' + (currentVariant ? ` [${currentVariant.title}]` : ''),
        title: fileName,
      }
    },
  },
})
