import './App.css';
import Card from './components/Card';
import { useState } from 'react';
//import flashcards from './flashcards.js';
const flashcards = [
  {
      question: "What type of data structure is best for implementing an undo feature?",
      answer: "Stack",
      type: "Easy",
      answerImg: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png",
      questionImg: "https://thumbs.dreamstime.com/b/data-structure-icon-line-style-element-organization-collection-thin-templates-infographics-simple-filled-more-203775477.jpg"
  },
  {
      question: "What type of data structure is best for representing a file system?",
      answer: "Tree",
      type: "Easy",
      answerImg: "https://cdn.programiz.com/sites/tutorial2program/files/tree_0.png",
      questionImg: "https://thumbs.dreamstime.com/b/data-structure-icon-line-style-element-organization-collection-thin-templates-infographics-simple-filled-more-203775477.jpg"


  },
  {
    question: "What method places an item on top of a stack?",
    answer: "Push",
    type: "Easy",
    answerImg: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png",
    questionImg: "https://thumbs.dreamstime.com/b/data-structure-icon-line-style-element-organization-collection-thin-templates-infographics-simple-filled-more-203775477.jpg"


  },
 
];

const App = () => {
  const [count, setCount] = useState(1);


  const setNextCard = () => {
    if (count < flashcards.length){
      setCount(count + 1);
    }
  }
  const setBackCard = () => {
    if (count <= flashcards.length && count > 1){
      setCount(count - 1);
    }
  }
  
  return (
    <div className="App">
      <h1>Data Structures Flashcards</h1>
      <div className='header'>
        <p>Learn the basics of data structures in Python! </p>
        <p>Count: {count} / {flashcards.length}</p>
      </div>
      <div className='container'>
        <Card answer={flashcards[count - 1].answer} question={flashcards[count - 1].question} questionImg={flashcards[count - 1].questionImg} answerImg={flashcards[count - 1].answerImg}/>
      </div>
      <div className='footer'>
        <button onClick={setBackCard}>BACK</button>
        <button onClick={setNextCard}>NEXT</button>
      </div>
       
    </div>
    
  )
}

export default App;