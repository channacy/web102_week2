import './App.css';
import Card from './components/Card';
import { useState } from 'react';
//import flashcards from '/flashcards.js';
const flashcards = [
  {
      question: "What type of data structure is best for implementing an undo feature?",
      answer: "Stack",
      type: "Easy"
  },
  {
      question: "What type of data structure is best for representing a file system?",
      answer: "Tree",
      type: "Easy"
  },
];

const App = () => {
  const [count, setCount] = useState(0);


  const setNextCard = () => {
    if (count < flashcards.length){
      setCount(count + 1);
    }
  }
  
  return (
    <div className="App">
      <div className='header'>
        <h1>Data Structures Flashcards</h1>
        <p>Count: {count} / {flashcards.length}</p>
      </div>
      <div className='container'>
        <Card answer={flashcards[count].answer} question={flashcards[count].question} />
      </div>
      <div className='button'>
        <button onClick={setNextCard}>Next</button>
      </div>
       
    </div>
    
  )
}

export default App;