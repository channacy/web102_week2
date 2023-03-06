import React, {useState} from "react";

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const flipCard = () =>{
        setShowAnswer(!showAnswer);
    }
    return (
        <div className="card" onClick={flipCard}>
            <div className="cardFront">
                {showAnswer? <p>{props.answer}</p>: <p>{props.question}</p>}
            </div>
        </div>
       
    );
  
}
export default Card;