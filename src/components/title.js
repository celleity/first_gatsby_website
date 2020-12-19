import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Title = ({titleName}) => {
  return (
    <title>
	<div>
       <h1>  {titleName} </h1>
		
      </div>
    </title>
  );
};

export default Title;