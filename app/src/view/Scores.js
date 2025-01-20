import React,{useEffect,useState} from 'react';

function Scores() {
    const [scores, setScores] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/scores")
            .then(res=>res.json())
            .then(data=>setScores(data))
            .catch(error => {
                console.log(error);
            })
    },[])

    return (
        <div className="container">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Answered question</th>
                    <th>Correct answers</th>
                    <th>Score</th>
                </tr>
                {scores.map((row) => (
                    <tr>
                        <td>{row.username}</td>
                        <td>{row.totalAnswers}</td>
                        <td>{row.correctAnswers}</td>
                        <td>{row.score}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
  }
  
  export default Scores;