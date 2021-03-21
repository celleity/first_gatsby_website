
import { useStaticQuery, graphql } from "gatsby"



export const Get_gallery_images = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid (maxWidth: 750){
                base64
    			aspectRatio
   				src
    			srcSet
    			sizes
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes
};