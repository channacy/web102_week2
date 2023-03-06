import React, {useState} from "react";

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const flipCard = () =>{
        setShowAnswer(!showAnswer);
    };
    const cardStyle={
        backgroundColor: props.difficulty === 'Easy' ? '#c1dec9' : props.difficulty === 'Medium' ? '#f1f7b7' : '#f7b7cf',
    };
    return (
        <div className="card" style={cardStyle} onClick={flipCard}>
          
            {showAnswer? <p>{props.answer}</p>: <p>{props.question}</p>}
            {showAnswer? <img src={props.answerImg}/> : <img src={props.questionImg}/>}
            <p>Difficulty: {props.difficulty}</p>
         
        </div>
       
    );
  
}
export default Card;