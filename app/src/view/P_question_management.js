import React,{useEffect,useState} from 'react';

function P_question_management() {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(()=>{
        fetch("http://localhost:3001/notAnswered")
            .then(res=>res.json())
            .then(data=>setQuestions(data))
            .catch(error => {
                console.log(error);
            })
    },[questions])

    const answerQuestion = (qId) => {
        console.log(qId);
        const newAnswer = {
            "questionId" : qId,
            "answer" : selectedAnswers[qId],
        }
        fetch("http://localhost:3001/answer", {
            "method" : "POST",
            body : JSON.stringify(newAnswer),
            headers : {
                "content-type" : "application/json"
            }
        })
    }

    const handleSelection = (questionId, choice) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: choice
            }));
    }

    return (
        <>
            <article class="questions">
                <h1>Not Answered Questions</h1>
                {questions.map((question) => (
                        <section class="question">
                            <h4>How many letters are there in "hello"?</h4>
                            <section>
                                <input id="q_1_1" name="question_1" type="radio" onChange={() => handleSelection(question.id,1)}/>
                                <label for="q_1_1">{question.choices[0]}</label>
                            </section>
                            <section>
                                <input id="q_1_2" name="question_1" type="radio" onChange={() => handleSelection(question.id,2)}/>
                                <label for="q_1_2">{question.choices[1]}</label>
                            </section>
                            <section>
                                <input id="q_1_3" name="question_1" type="radio" onChange={() => handleSelection(question.id,3)}/>
                                <label for="q_1_3">{question.choices[2]}</label>
                            </section>
                            <section>
                                <input id="q_1_4" name="question_1" type="radio" onChange={() => handleSelection(question.id,4)}/>
                                <label for="q_1_4">{question.choices[3]}</label>
                            </section>
                            <button class="submit" onClick={answerQuestion(question.id)}>Submit Answer</button>
                        </section>
                    ))}
            </article>
        </>
    );
  }
  
  export default P_question_management;