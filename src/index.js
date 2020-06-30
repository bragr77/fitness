//antigua forma
/* const element = document.createElement('h1');
element.innerText = "Hola Mundo";
const container = document.getElementById('root');
container.appendChild(element); */

//con react

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Welcome from './components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css'
import exerciseImg from './images/exercise.png'

const container = document.getElementById('root')
//ReactDOM.render (_QUE_ , _DONDE_)
ReactDOM.render(<div>
                    <Welcome
                        username="Raúl"
                    />
                    <Card 
                        title       ="Technique Guide"
                        description ="Learn amazing street workout and calisthenics"
                        //img         ="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                        img         ={exerciseImg} //usar imagen local
                        leftColor   ="#A74CF2"
                        rightColor  ="#617BFB"
                    />
                </div>, container)