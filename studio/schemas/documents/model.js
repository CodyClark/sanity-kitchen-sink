export default {
  type: 'document',
  name: 'model',
  title: 'Model',
  fields: [
    {
      name: 'modelImage',
      type: 'image'
    },
    {
      name: 'code',
      type: 'string',
      title: 'Model Code',
    },
    {
      name: 'trim',
      type: 'string',
      title: 'Trim',
    },
    {
      name: 'cityMPG',
      type: 'string',
      title: 'City MPG',
    },
    {
      name: 'hwyMPG',
      type: 'string',
      title: 'Hwy MPG',
    }
  ],
}
