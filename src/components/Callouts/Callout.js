import React from "react"
import { useQuery } from 'react-apollo'
import GET_CALLOUT from '../Queries/CalloutsQuery'

const StreamCallout = (props) => {
    
  const { loading, error, data } = useQuery(GET_CALLOUT, { variables: { calloutSlug: props.calloutSlug } })

  if (loading) return `<h4>Fetching Callout...</h4>`;
  if (error) return `<h4>Error! ${error.message}</h4>`;
  const items = data.calloutTemplates
  const contentMarkup = () => {
    return { __html: items.map(item =>item.calloutContent.html  ) }
  }
  return (
    <>
        <article className="callout" id={items.map(item => item.calloutSlug)}>
            <h4>{items.map(item => item.calloutTitle)}</h4>
            <div dangerouslySetInnerHTML={contentMarkup()}/>
        </article>
    </>
  )
}

export default StreamCallout 