import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'true-north-tales',

  projectId: 'kq7mi2fj',
  dataset: 'true-north-tales',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
