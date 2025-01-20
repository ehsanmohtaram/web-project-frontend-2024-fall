import '../App.css';
import React, { useState } from "react";


function LoginBox() {
    const [username, setUsername] = useState("")
    const [password, serPassword] = useState("")

    const handleInputChangeU = (event) => {
        setUsername(event.target.value);
    };
    const handleInputChangeP = (event) => {
        serPassword(event.target.value)
    };

    const signIn = () => {
        const newUser = {
            "username" : username,
            "password" : password
        }
        fetch("http://localhost:3001/user", {
            "method" : "POST",
            body : JSON.stringify(newUser),
            headers : {
                "content-type" : "application/json"
            }
        })
            .then(res=>res.json())
            .then(data=>alert(data["message"])
            )
            .catch(error => {
                console.log(error);
            })
    }

    const signUp = () => {
        const newUser = {
            "username" : username,
            "password" : password
        }
        fetch("http://localhost:3001/addUser", {
            "method" : "POST",
            body : JSON.stringify(newUser),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>alert(data["message"]))
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <section className="login_box">
            <div>
                <label className="login_label" htmlFor="username">Username </label>
                <input type="text" placeholder="username" value={username} onChange={handleInputChangeU} defaultValue="" />
            </div>
            <div>
                <label className="login_label" htmlFor="password">Password </label>
                <input type="text" value={password} onChange={handleInputChangeP} defaultValue="" placeholder="password" />
            </div>
            <button className="add_button" onClick={signIn}>Sign In</button>
            <button className="add_button" onClick={signUp}>Sign Up</button>
        </section>
    );
}

export default LoginBox;
