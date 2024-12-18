import React,{useEffect,useState} from 'react';

function P_question_management() {
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/questions")
            .then(res=>res.json())
            .then(data=>setQuestions(data))
            .catch(error => {
                console.log(error);
            })
    },[questions])

    const answerQuestion = () => {
        //اضافه کردن فیلد بخش‌های مختلف طرح سوال
        //TODO
        const newQuestion = {
            "ask" : "how many people are dead?",
            "choices" : ["100", "200", "300", "400"],
            "answer" : "100",
            "seed" : "population"
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
                <h1>Answered Questions</h1>
                {/* <section class="question">
                    <h4>How many letters are there in "hello"?</h4>
                    <ul>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li class="chosen_answer">5</li>
                    </ul>
                </section>
                <section class="question">
                    <h4>Where is the capital of Iran?</h4>
                    <ul>
                        <li class="chosen_answer">Tehran</li>
                        <li>Mashhad</li>
                        <li>Esfehan</li>
                        <li>Yazd</li>
                    </ul>
                </section> */}
            </article>
            <button class="add_button" onClick={answerQuestion}>Answer New Question</button>
        </>
    );
  }
  
  export default P_question_management;