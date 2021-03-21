import { useStaticQuery, graphql } from "gatsby"


export const useBookData = () => {
 const data = useStaticQuery(graphql` 
		
			query BookQuery {
				allBookJson {
					edges
						{
					node {
						book
						author
						link


					}		
						}
				}
				}`
      )
  return data;
}