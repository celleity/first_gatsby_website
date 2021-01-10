import { useStaticQuery, graphql } from "gatsby"


export const useShowData = () => {
  const data = useStaticQuery(
    graphql`
      query ShowQuery {
        allShowsJson {
			edges {
				node {
				 show
				 director
				}
			}
        
           
          
        }
      }
    `
  )
  return data
}