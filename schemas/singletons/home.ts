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
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero.home',
      group: 'editorial',
    }),
    // Product Feed
    defineField({
      name: 'productFeedMen',
      title: 'Product Feed',
      type: 'module.productFeed',
      group: 'editorial',
    }),
    // New arrivals Feed
    defineField({
      name: 'newArrivalFeed',
      title: 'New Arrival Feed',
      type: 'module.newArrivalFeed',
      group: 'editorial',
    }),
    // Categories
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'module.categories',
      group: 'editorial',
    }),
    // Video
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
      group: 'editorial',
    }),
    // Product Feed
    defineField({
      name: 'productFeedWomen',
      title: 'Product Feed',
      type: 'module.productFeed',
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
