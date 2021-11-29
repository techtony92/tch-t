import React,{useContext} from "react";
import {Context} from "../context";
import {useRouter} from "next/router";
import axios from "axios";

export default function Auth() {
  const {userName, setUsername, secret, setSecret} = useContext(Context);
  const router = useRouter();

  const formSubmition = (event) =>{
    event.preventDefault();
    if(userName.length === 0 || secret.length === 0 ) return;
    axios.put("https://api.chatengine.io/users/", {username:userName, secret: secret},{headers: {"PRIVATE-KEY": process.env.CHAT_API_SECRET}})
    .then(response => router.push("/chats"))
  }


  return (<div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={event => formSubmition(event)}>
          <div className="auth-title">TCh@T</div>
          <div className="input-container">
            <input type="email" placeholder="email" className="text-input" onChange={event => setUsername(event.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" placeholder="password" className="text-input" onChange={event => setSecret(event.target.value)} />
          </div>
          <button type="submit" className="submit-button">
            Login / SignUp
          </button>
        </form>
      </div>
  </div>);
}
