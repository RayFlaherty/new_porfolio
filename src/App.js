import React, { useState } from "react";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Gallery from "./components/Gallery/index"
import Nav from "./components/Nav/Nav";
import Photos from "./components/Photos/index.js";


function App() {

  const[categories]= useState([
    {name:'About Me', description:'Short Description of me', id:"about"
    },
    {name:'Contact', description: 'Links to social media and email form',
    },
    {name: 'Work', description: 'Links to bootcamp Projects',
    },
    {name:'Photo Gallery', description: 'A look at my family,'}
  ]);

  const [currentCategory, setCurrentCategory]= useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Contact></Contact>
            <Photos></Photos>
          </>
        ) : (
          <About></About>,
          <Gallery></Gallery>
        )}
      </main>
    </div>
  );
}

export default App;