import '../App.css';
import React, { useState } from "react";


function LoginBox() {
    const [username, setUsername] = useState("")
    const [password, serPassword] = useState("")
    let respons = ""

    const handleInputChangeU = (event) => {
        setUsername(event.target.value);
    };
    const handleInputChangeP = (event) => {
        serPassword(event.target.value)
    };

    const singIn = () => {
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
            .then(data=>respons = data)
            .catch(error => {
                console.log(error);
            })
        alert(respons)
    }

    const singUp = () => {
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
            .then(data=>respons = data)
            .catch(error => {
                console.log(error);
            })
        alert(respons)
    }



    return (
        <section class="login_box">
            <div>
                <label className="login_label" htmlFor="username">Username </label>
                <input type="text" placeholder="username" value={username} onChange={handleInputChangeU} defaultValue="" />
            </div>
            <div>
                <label className="login_label" for="password">Password </label>
                <input type="text" value={password} onChange={handleInputChangeP} defaultValue="" placeholder="password" />
            </div>
            <button className="add_button" onClick={singIn}>Sign In</button>
            <button class="add_button" onClick={singUp}>Sign Up</button>
        </section>
    );
}

export default LoginBox;
