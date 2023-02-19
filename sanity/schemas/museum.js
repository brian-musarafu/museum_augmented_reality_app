import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'museum',
  title: 'Museum',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Museum name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Museum',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Museum',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Museum',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Museum address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a vale between 1 and 5'),
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'artifacts',
      type: 'array',
      title: 'Artifacts',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'artifacts'}]}],
    },
  ],
})
