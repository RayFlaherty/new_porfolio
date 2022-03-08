import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "./utils/helpers";


function Nav(props) {

  const {
    categories=[],
    setCurrentCategory,
    currentCategory,
  }=props;

  useEffect(() => {
    document.title= capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
        <h1>Raymond Flaherty</h1>
        <nav>
          <ul className="flex-row">
            <li>
            <a data-testid="about" href="#about">
              About me! 
              </a>
              </li>
              <li>
                <span>Contact</span>
              </li>
              {categories.map((category)=>(
                <li
                className={`mx-1 ${
                  currentCategory.name===category.name && 'navActive'
                }`} key={category.name}>
                  <span
                    onClick={()=> {
                      setCurrentCategory(category)
                    }}>
                      {capitalizeFirstLetter(category.name)}
                      </span>
                      </li>
              ))}
              </ul>
        </nav>
      </header>
   
  );
}

export default Nav;