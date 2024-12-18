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
            "choices" : form.choices.value,
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
            <article class="questions">
                <h1>Questions</h1>
                    {questions.map((question) => (
                        <section className='question'>
                            <h4>{question.ask}</h4>
                            <section>
                                <input id="q_1_1" name="question_1" type="radio"/>
                                <label for="q_1_1">{question.choices[0]}</label>
                            </section>
                            <section>
                                <input id="q_1_2" name="question_1" type="radio"/>
                                <label for="q_1_2">{question.choices[1]}</label>
                            </section>
                            <section>
                                <input id="q_1_3" name="question_1" type="radio"/>
                                <label for="q_1_3">{question.choices[2]}</label>
                            </section>
                            <section>
                                <input id="q_1_4" name="question_1" type="radio"/>
                                <label for="q_1_4">{question.choices[3]}</label>
                            </section>
                            <button class="submit">Submit Answer</button>
                        </section>
                    ))}
                {/* <section class="question">
                    
                    </section>*/}
            </article>
            <form onSubmit={addQuestion}>
                <input
                    type="text"
                    name="ask"
                    placeholder="question"
                    required
                />
                <input
                    type="text"
                    name="choices"
                    placeholder="choices"
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
                <button type="submit">Add New Question</button>
            </form>
        </>
    );
  }
  
  export default D_question_management;