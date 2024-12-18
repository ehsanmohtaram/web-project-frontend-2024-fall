import React,{useEffect,useState} from 'react';

function Seed_management() {
    const [questions, setQuestions] = useState([]);
    
        useEffect(()=>{
            fetch("http://localhost:3001/questions")
                .then(res=>res.json())
                .then(data=>setQuestions(data))
                .catch(error => {
                    console.log(error);
                })
        },[questions])
    return (
        <>
            <article class="seeds">
                <h1>Seeds</h1>
                <section class="seed">
                    <h4>literature</h4>
                    <ul>
                        <li><a href="#q1">hello question</a></li>
                    </ul>
                </section>
                <section class="seed">
                    <h4>Geography</h4>
                    <ul>
                        <li><a href="#q2">capital of Iran</a></li>
                    </ul>
                </section>
            </article>
            <button class="add_button">Add New Seed</button>
        </>
    );
  }
  
  export default Seed_management;