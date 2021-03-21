import { useStaticQuery, graphql } from "gatsby"


export const useMovieData = () => {
  const data = useStaticQuery(
    graphql`
      query MovieQuery {
        allMoviesJson {
			edges {
				node {
				 movie
				 director
				 link
				}
			}
        
           
          
        }
      }
    `
  )
  return data
}