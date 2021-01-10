import { useStaticQuery, graphql } from "gatsby"


export const useArtworkData = () => {
 const data = useStaticQuery(graphql` 
		
			query ArtworkQuery {
				allArtworksJson {
    edges {
      node {
        artist
        artwork
      }
    }
  }
				}`
      )
  return data;
}