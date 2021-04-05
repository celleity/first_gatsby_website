import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';



const TitleText = (props) => {


console.log(props)
let title = props.title

const newLink = "/art/" + title


  return (
       
					<p className="hoverText" >{props.title}</p> 
				
			 
            )};
		



export default TitleText;