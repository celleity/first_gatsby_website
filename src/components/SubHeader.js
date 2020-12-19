import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const SubHeader = ({SubHeaderContent}) => {
  return (
    <SubHeader>
	<Container>
		<p>{SubHeaderContent} </p>
	</Container>
      
    </SubHeader>
  );
};

export default SubHeader;