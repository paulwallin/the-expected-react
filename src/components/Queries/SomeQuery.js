import gql from "graphql-tag";
const SomeQuery = gql`
query {
    calloutTemplates(where: {calloutTitle: "Follow us"}) {
      id
      calloutTitle
      calloutContent {
        html
      }
    }
  }
`;
export default SomeQuery;