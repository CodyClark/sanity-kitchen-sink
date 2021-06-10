export default {
  type: 'document',
  name: 'offer',
  title: 'Offer',
  preview: {
    select: {
      title: 'optionTypeName',
      subtitle: 'optionTypeName',
    }
  },
  fields: [
    {
      name: 'offerType',
      type: 'string',
      title: 'Offer Type',
      readOnly: true,
    },
    {
      name: 'optionTypeName',
      type: 'string',
      title: 'Option Type Name',
      readOnly: true,
    },
    {
      name: 'lang',
      type: 'string',
      title: 'lang',
      readOnly: true,
    },
    {
      name: 'contestNumber',
      type: 'string',
      title: 'Contest Number',
      readOnly: true,
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      readOnly: true,
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID',
      readOnly: true,
    },
    {
      name: 'offerId',
      type: 'string',
      title: 'Offer Id',
      readOnly: true,
    },
    {
      name: 'tfsCalculator',
      type: 'boolean',
      title: 'TFS Calculator',
      readOnly: true,
    },
    {
      name: 'useForEmail',
      type: 'boolean',
      title: 'Use For Email',
      readOnly: true,
    },
    {
      name: 'isSpecialEdition',
      type: 'boolean',
      title: 'Is Special Edition',
      readOnly: true,
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      readOnly: true,
    },
    {
      name: 'fundingSource',
      type: 'string',
      title: 'Funding Source',
      readOnly: true,
    },
    {
      name: 'leaseTrimGrade',
      type: 'string',
      title: 'Lease Trim Grade',
      readOnly: true,
    },
    {
      name: 'startDate',
      type: 'string',
      title: 'Start Date',
      readOnly: true,
    },
    {
      name: 'endDate',
      type: 'string',
      title: 'End Date',
      readOnly: true,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readOnly: true,
    },
    {
      name: 'additionalDisclaimers',
      type: 'string',
      title: 'Additional Disclaimers',
      readOnly: true,
    },
    {
      name: 'additionalRestrictions',
      type: 'string',
      title: 'Additional Restrictions',
      readOnly: true,
    },
    {
      name: 'offerImage',
      type: 'string',
      title: 'Offer Image',
      readOnly: true,
    },
    {
      name: 'offerImageAlt',
      type: 'string',
      title: 'Offer Image Alt',
      readOnly: true,
    },
    {
      name: 'offerImageDisclaimer',
      type: 'string',
      title: 'Offer Image Disclaimer',
      readOnly: true,
    },
    {
      title: 'States',
      name: 'states',
      type: 'states',
      readOnly: true,
    },
    {
      title: 'Series List',
      name: 'seriesList',
      type: 'seriesList',
      
    },
    {
      title: 'Bullets',
      name: 'bullets',
      type: 'bullets',
      readOnly: true,
    },
    {
      title: 'Disclaimers',
      name: 'disclaimers',
      type: 'disclaimers',
      readOnly: true,
    },
    {
      title: 'Restrictions',
      name: 'restrictions',
      type: 'restrictions',
      readOnly: true,
    },
    {
      title: 'Offer Card',
      name: 'offerCard',
      type: 'offerCard',
      readOnly: true,
    },
  ],
}
