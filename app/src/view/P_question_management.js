import React,{useEffect,useState} from 'react';

function P_question_management() {
    const [myQuestions, setMyQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [seed, setSeed] = useState("");


    useEffect(()=>{
        fetch("http://localhost:3001/notAnswered")
            .then(res=>res.json())
            .then(data=>setMyQuestions(data))
            .catch(error => {
                console.log(error);
            })
    },[])

    const answerQuestion = (qId) => {
        const newAnswer = {
            "questionId" : qId,
            "chosenChoice" : selectedAnswers[qId],
        }
        fetch("http://localhost:3001/answer", {
            "method" : "POST",
            body : JSON.stringify(newAnswer),
            headers : {
                "content-type" : "application/json"
            }
        })
        fetch("http://localhost:3001/notAnswered")
            .then(res=>res.json())
            .then(data=>setMyQuestions(data))
            .catch(error => {
                console.log(error);
            })
    }

    const followDesigner = (qId) => {
        fetch(`http://localhost:3001/followDesigner/${qId}`, {
            "method" : "POST",
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

    const filter = (num, seed) => {
        const url = `http://localhost:3001/bySeed?name=${encodeURIComponent(seed)}`;
        if (num == 1){
            fetch("http://localhost:3001/notAnswered")
                .then(res=>res.json())
                .then(data=>setMyQuestions(data))
                .catch(error => {
                    console.log(error);
                })
        } else if(num == 2){
            fetch("http://localhost:3001/followed")
                .then(res=>res.json())
                .then(data=>setMyQuestions(data))
                .catch(error => {
                    console.log(error);
                })
        } else {
            fetch(url, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => setMyQuestions(data))
                .catch(error => {
                    console.log(error);
                })
        }
    }


    return (
        <>
            <article className="questions">
                <h1>Not Answered Questions</h1>
                <button className="submit" onClick={() => filter(1)}>Not Answered</button>
                <button className="submit" onClick={() => filter(2)}>Followed</button>
                <button className="submit" onClick={() => filter(3, seed)}>By Seed</button>
                <input
                    className='seed_input'
                    type="text"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    placeholder="Enter seed"
                />
                {myQuestions.map((question) => (
                    <section className="question">
                        <h4>{question.ask}</h4>
                        <section>
                            <input id={`q_${question.id}_1`} name={`question_${question.id}`} type="radio"
                                   onChange={() => handleSelection(question.id, 1)}/>
                            <label htmlFor={`q_${question.id}_1`}>{question.choices[0]}</label>
                        </section>
                        <section>
                            <input id={`q_${question.id}_2`} name={`question_${question.id}`} type="radio"
                                   onChange={() => handleSelection(question.id, 2)}/>
                            <label htmlFor={`q_${question.id}_2`}>{question.choices[1]}</label>
                        </section>
                        <section>
                            <input id={`q_${question.id}_3`} name={`question_${question.id}`} type="radio"
                                   onChange={() => handleSelection(question.id, 3)}/>
                            <label htmlFor={`q_${question.id}_3`}>{question.choices[2]}</label>
                        </section>
                        <section>
                            <input id={`q_${question.id}_4`} name={`question_${question.id}`} type="radio"
                                   onChange={() => handleSelection(question.id, 4)}/>
                            <label htmlFor={`q_${question.id}_4`}>{question.choices[3]}</label>
                        </section>
                        <button className="submit" onClick={() => answerQuestion(question.id)}>Submit Answer</button>
                        <button className="submit" onClick={() => followDesigner(question.id)}>Follow Designer</button>
                    </section>
                ))}
            </article>
        </>
    );
}

export default P_question_management;