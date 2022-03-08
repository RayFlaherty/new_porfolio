//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About'
import { useState } from 'react';

function App(){
  const [categories] = useState([
    {name: 'Raymond Flaherty',
  description: 'Photos of Raymond with family and at work.'
},
{name:'photos of family', description:'The most important people in my life!'},
  ]);

  const [currentCategory, setCurrentCategory]= useState (categories[0]);
    return (
      <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
        <main>
          <About></About>
        </main>
      </div>
    );
  }
  
  export default App;