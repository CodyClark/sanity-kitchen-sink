export default {
  type: 'document',
  name: 'series',
  title: 'Series',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Series Name',
    },
    {
      name: 'startingMSRP',
      type: 'string',
      title: 'Staring MSRP',
      description: 'desc goes here'
    },
    {
      type: 'array',
      name: 'Models',
      of: [{ type: 'model' }]
    }
  ],
}
