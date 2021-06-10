import Tabs from "sanity-plugin-tabs"

export default {
  type: 'document',
  name: 'model',
  title: 'Model',
  fields: [
    {
      name: 'modelId',
      type: 'number',
      title: 'Model Id',
    },
    {
      name: 'grade',
      type: 'string',
      title: 'Grade',
    },
    {
      name: 'modelNumber',
      type: 'string',
      title: 'Model Number',
    },
    {
      name: 'modelName',
      type: 'string',
      title: 'Model Name',
    },
    {
      name: 'modelDescription',
      type: 'string',
      title: 'Model Description',
    },
    {
      name: 'modelYear',
      type: 'string',
      title: 'Model Year',
    },
    {
      name: 'modelYearVersionCode',
      type: 'string',
      title: 'Model Year Version Code',
    },
    {
      name: 'modelYearDescription',
      type: 'string',
      title: 'Model Year Description',
    },
    {
      name: 'engine',
      type: 'string',
      title: 'Engine',
    },
    {
      name: 'make',
      type: 'string',
      title: 'Make',
    },
    {
      name: 'msrp',
      type: 'number',
      title: 'MSRP',
    },
    {
      name: 'invoice',
      type: 'number',
      title: 'Invoice',
    },
    {
      name: 'dealerCost',
      type: 'number',
      title: 'Dealer Cost',
    },
    {
      name: 'characteristics',
      type: 'object',
      title: 'Characteristics',
      type: 'characteristic',
      collapsible: true,
      collapsed: true,

    },
  ],
}
