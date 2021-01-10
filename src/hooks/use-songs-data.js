import { useStaticQuery, graphql } from "gatsby"


export const useSongData = () => {
  const data = useStaticQuery(
    graphql`
      query SongQuery {
        allSongsJson {
			edges {
				node {
				 song
				 band
				}
			}
        
           
          
        }
      }
    `
  )
  return data
}