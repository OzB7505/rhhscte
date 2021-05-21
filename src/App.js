import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/card.js'
function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <div className="container">
        <ul className="cards">
          <Card
            title= 'Teacher card'
            imageUrl='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg'
            body='Teacher description'
            />
            <Card
            title= 'Teacher card'
            imageUrl='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg'
            body='Teacher description'
            />

            
        </ul>
      </div>
    </div>
  );
}

export default App;
