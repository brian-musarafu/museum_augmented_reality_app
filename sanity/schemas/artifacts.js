import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artifacts',
  title: 'Artifacts',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Artifact name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Museum',
    },
    {
      name: 'ar_image',
      type: 'image',
      title: '3D AR Image',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Artifact',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Artifact',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Artifact address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a vale between 1 and 5'),
    },
  ],
})
