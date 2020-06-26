//antigua forma
/* const element = document.createElement('h1');
element.innerText = "Hola Mundo";
const container = document.getElementById('root');
container.appendChild(element); */

//con react

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName : 'Raul',
    lastName : 'Gonzalez',
    avatar : 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user) {
    return `${user.firstName} ${user.lastName}`    
}

function getGreeting(user){
    if (user){
        return <h1> Hola {getName(user)} </h1> 
    } 

    return <h1> Hola Extraño </h1>
}

const name = 'Raul'
const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} alt=""/>
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element, container)