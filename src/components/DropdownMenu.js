import React,{useState, useEffect, useRef}  from 'react';
import { Link } from 'gatsby';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Container from 'components/Container';

const DropDownMenu = (menuName) => {

const menuOptions = ["Ink", "Sketchbooks", "Watercolour", "Acrylic", "Prints", "Other"]
console.log(menuName)
	console.log(menuOptions)
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
 
	
  return (
   
	 <div className="menu-container"> 
		<a href="#/art" onClick={onClick} className="menu-trigger">art</a>
		<nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
		 <ul onClick={onClick}> 
		 <li><a href="/art/#Ink">Ink</a></li>
          <li><a href="/art/#Watercolour">Watercolour</a></li>
          <li><a href="/art/#Sketchbooks">Sketchbooks</a></li>
		  <li><a href="/art/#Photography">Photography</a></li>
		  <li><a href="/art/#Prints">Prints</a></li>
		  <li><a href="/art/#Acrylic">Acrylic</a></li>
		  <li><a href="/art/#Other">Other</a></li>
          
        
		  
        </ul>
      </nav>

	 </div>
	
  );

  };

export default DropDownMenu;



