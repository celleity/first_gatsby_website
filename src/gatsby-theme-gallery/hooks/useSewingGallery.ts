import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";

interface Query {
  allFile: {
    nodes: {
      id: string;
      name: string;
      publicURL: string;
      childImageSharp: {
        fluid: FluidObject;
      };
    }[];
  };
}

const useSewingGallery = () => {
  // TODO: Make "content/gallery" dynamic somehow..
  const data = useStaticQuery<Query>(graphql`
    query {
      allFile(
          filter: { relativeDirectory: { eq: "Sewing" } },
          sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid (maxWidth: 750, maxHeight: 500){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }));
};

export default useSewingGallery;