import client from 'part:@sanity/base/client'

client
  .delete({query: '*[_type == "model"][0...999]'})
  .then(console.log)
  .catch(console.error)