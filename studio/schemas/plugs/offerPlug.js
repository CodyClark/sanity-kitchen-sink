import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2019-05-28'})

export default {
  type: 'object',
  name: 'offerPlug',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      name: 'seriesOffer',
      type: 'reference',
      title: 'Series Offer',
      to: [{type: 'series'}],
      options: {
        filter: ({ document }) => {
          console.log(document)
          
          // if (!document.series) {
          //   return;
          // }
          
          return {
            filter: "series._id == $seriesId",
            params: {
              seriesId: document.series._ref,
            }
          }
        }
      }
    },
  ],
    preview: {
    select: { 
      title: 'title'
    },
    prepare({ selection }) {
      // console.log(selection)
      return {
        title: `Offer module:`
      }
    }
  }
}
