export default {
  type: 'document',
  name: 'series',
  title: 'Series',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Series Name',
      readOnly: true,
    },
    {
      name: 'group',
      type: 'string',
      title: 'Group',
      readOnly: true,
    },
    {
      name: 'startingMSRP',
      type: 'number',
      title: 'Starting MSRP',
      readOnly: true,
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      readOnly: true,
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
      readOnly: true,
    },
    {
      name: 'mpgCity',
      type: 'string',
      title: 'MPG City',
      readOnly: true,
    },
    {
      name: 'mpgHighway',
      type: 'string',
      title: 'MPG Highway',
      readOnly: true,
    },
    {
      name: 'seats',
      type: 'number',
      title: 'Seats',
      readOnly: true,
    },
    {
      name: 'adjustedSeats',
      type: 'number',
      title: 'Adjusted Seats',
      readOnly: true,
    },
    {
      name: 'models',
      type: 'array',
      title: 'Models',
      readOnly: true,
      of: [
        {
          type: 'reference',
          to: [
            {type: 'model'},
          ]
        }
      ],
    },
    {
      name: 'offers',
      type: 'array',
      title: 'Offers',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'offer'},
          ],
          options: {
            filter: ({ document }) => {
              console.log(document)
              if (!document.name) {
                return;
              }
              return {
                filter: 'seriesList.series.id == $name',
                params: {
                  name: document.name.toLowerCase(),
                }
              }
            }
          }
        }
      ],
    },
  ],
  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
  ]
}
