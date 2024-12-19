import React,{useEffect,useState} from 'react';

function D_question_management() {
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/questions")
            .then(res=>res.json())
            .then(data=>setQuestions(data))
            .catch(error => {
                console.log(error);
            })
    },[questions])

    const addQuestion = (e) => {
        e.preventDefault();
        const form = e.target; 
        
        const newQuestion = {
            "ask" : form.ask.value,
            "choices" : [form.choice1.value,form.choice2.value,form.choice3.value,form.choice4.value],
            "answer" : form.answer.value,
            "seed" : form.seed.value
        }
        fetch("http://localhost:3001/question", {
            "method" : "POST",
            body : JSON.stringify(newQuestion),
            headers : {
                "content-type" : "application/json"
            }
        })
    }
        
    return (
        <>
            <article className="questions">
                <h1>Questions</h1>
                    {questions.map((question) => (
                        <section className='question'>
                            <h4>{question.ask}</h4>
                            <ul>
                                <li>{question.choices[0]}</li>
                                <li>{question.choices[1]}</li>
                                <li>{question.choices[2]}</li>
                                <li>{question.choices[3]}</li>
                            </ul>
                        </section>
                    ))}
            </article>
            <form className="inputBox"onSubmit={addQuestion}>
                <input
                    type="text"
                    name="ask"
                    placeholder="question"
                    required
                />
                <input
                    type="text"
                    name="choice1"
                    placeholder="choice1"
                    required
                />
                <input
                    type="text"
                    name="choice2"
                    placeholder="choice2"
                    required
                />
                <input
                    type="text"
                    name="choice3"
                    placeholder="choice3"
                    required
                />
                <input
                    type="text"
                    name="choice4"
                    placeholder="choice4"
                    required
                />
                <input
                    type="text"
                    name="answer"
                    placeholder="correct answer"
                    required
                />
                <input
                    type="text"
                    name="seed"
                    placeholder="seed"
                    required
                />
                <button class = "submitQuestion" type="submit">Add New Question</button>
            </form>
        </>
    );
  }
  
  export default D_question_management;