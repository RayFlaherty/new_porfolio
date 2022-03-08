//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About'
import { useState } from 'react';
import ContactForm from './components/Contact/Contact';

function App(){
  const [categories] = useState([
    {name: 'Raymond Flaherty',
  description: 'Photos of Raymond with family and at work.'
},
{name:'photos of family', description:'The most important people in my life!'},
  ]);

  const [currentCategory, setCurrentCategory]= useState (categories[0]);
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
             <About></About>
            </>
          ):(
            <ContactForm></ContactForm>
          )}
         
        </main>
      </div>
    );
  }
  
  export default App;