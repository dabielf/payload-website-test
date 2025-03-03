import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Notes: CollectionConfig = {
  slug: 'notes',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'author', type: 'relationship', relationTo: 'users', hasMany: false },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
        name: 'content',
        type: 'richText',
        required: true,
    },
    ...slugField(),
  ],
}