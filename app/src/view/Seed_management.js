import React,{useEffect,useState} from 'react';

function Seed_management() {
    const [seeds, setSeeds] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3001/seeds")
            .then(res=>res.json())
            .then(data=>setSeeds(data))
            .catch(error => {
                console.log(error);
            })
    },[seeds])
    const addSeeds = () => {
        const newSeed = {
            "name" : "infinite jest",
            "questions" : ["motiee"]
        }
        fetch("http://localhost:3001/seed", {
            "method" : "POST",
            body : JSON.stringify(newSeed),
            headers : {
                "content-type" : "application/json"
            }
        })
    }
    return (
        <>
            <article class="seeds">
                <h1>Seeds</h1>
                <section>
                    {seeds.map((seed) => (
                        <div>
                            <h4>{seed.name}</h4>
                            <p>{seed.questions}</p>
                        </div>
                    ))}
                </section>
                {/* <section class="seed">
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
                </section> */}
            </article>
            <button class="add_button" onClick={addSeeds}>Add New Seed</button>
        </>
    );
  }
  
  export default Seed_management;