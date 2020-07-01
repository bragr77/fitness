//antigua forma
/* const element = document.createElement('h1');
element.innerText = "Hola Mundo";
const container = document.getElementById('root');
container.appendChild(element); */

//con react

import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.min.css'


const container = document.getElementById('root')
//ReactDOM.render (_QUE_ , _DONDE_)
ReactDOM.render(<Exercises/>, container)