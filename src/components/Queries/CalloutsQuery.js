import gql from "graphql-tag";

const GET_CALLOUT = gql`
    query($calloutSlug: String) {
        calloutTemplates(where: { calloutSlug: $calloutSlug }) {
        id
        calloutTitle
        calloutSlug
        calloutContent { 
            html
          }
        }
    }
`
export default GET_CALLOUT