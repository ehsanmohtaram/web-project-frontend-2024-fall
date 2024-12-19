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
    const addSeeds = (e) => {
        e.preventDefault();
        const form = e.target; 

        const newSeed = {
            "name" : form.name.value,
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
                {seeds.map((seed) => (
                    <section className="seed">
                        <h4>{seed.name}</h4>
                        <ul>
                        {
                            seed.questions.map((q) => (
                                <li>{q}</li>
                            ))
                        }
                        </ul>
                    </section>
                ))}
            </article>
            <form onSubmit={addSeeds}>
                <input
                    type="text"
                    name="name"
                    placeholder="seed name"
                    required
                />
                <button type="submit">Add New Seed</button>
            </form>
        </>
    );
  }
  
  export default Seed_management;