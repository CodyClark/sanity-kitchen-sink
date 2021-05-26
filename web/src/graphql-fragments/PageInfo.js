import { graphql } from "gatsby";
export const PostInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    navMenu {
      ...NavMenu
    }
    _rawContent(resolveReferences: { maxDepth: 10 })
    title
    series {
      name
      group
      startingMSRP
      category
      year
      mpgCity
      mpgHighway
      seats
      adjustedSeats
      Models {
          modelId
          grade
          modelNumber
          modelName
          modelDescription
          modelYear
          modelYearVersionCode
          modelYearDescription
          engine
          make
          msrp
          invoice
          dealerCost
      }
    }
  }
`;
