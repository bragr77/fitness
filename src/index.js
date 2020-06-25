//antigua forma
/* const element = document.createElement('h1');
element.innerText = "Hola Mundo";
const container = document.getElementById('root');
container.appendChild(element); */

//con react

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1> Hola Mundo </h1>
const container = document.getElementById('root')

ReactDOM.render(element, container)