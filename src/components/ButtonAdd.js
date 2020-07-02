import React from 'react'
import buttonImg from '../images/add.png'
import './styles/ButtonAdd.css'

function ButtonAdd(props) {
    return(
        <div>
            <img src={buttonImg} alt="boton de adicionar" className="Fitness-Add" />            
        </div>
    )
}

export default ButtonAdd