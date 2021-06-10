 import sanityClient from 'part:@sanity/base/client'
 const client = sanityClient.withConfig({apiVersion: '2019-05-28'})

 const fetchData = async (query, params) => {
  var data = {};
  await client.fetch(query, params).then((offer) => {
    data = offer[0];
  });
  return data;
}

export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'heroOffer',
      type: 'reference',
      title: 'Hero Offer',
      to: [{type: 'offer'}],
      options: {
        filter: ({ document }) => {
          return {
            filter: "seriesList.series.id == $seriesName",
            params: {
              seriesName: document.title.toLowerCase(), //todo this is using the page title which isn't right -- need to use the selected seried name or id
            }
          }
        }
      }
    },
  ],
  preview: {
    select: {
      offer: 'heroOffer'
    },
    prepare({ offer }) {
      const query = '*[_type == "offer" && _id == $id]'
      const params = {id: offer._ref};
      fetchData(query, params).then(result => {
        console.log(result);
      });

      return {
        title: `Hero:`
      }
    }
  }
}
