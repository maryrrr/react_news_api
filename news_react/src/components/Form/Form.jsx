import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import './Form.styles.scss'


let formArray = [];
localStorage.setItem("userData", JSON.stringify(formArray));



export const Form = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        description: "",
    })
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    
    const initialState = {
        title: "",
        description: "",
    }
    const clearState = () => {
        setData({ ...initialState });
        }
    const handleInputChange = (event) => {
        if(event.target.name === "title" && 
        event.target.value && 
        event.target.value.length < 3){

            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
            } else {
                setMessage(null)
                setBtnDisabled(false)
            }

            setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.title} ${data.description}`);
        
        const newForm = JSON.parse(localStorage.getItem("userData")) || [];
        newForm.push(data);
        

        //guardar los datos en localstorage
        localStorage.setItem("userData", JSON.stringify(newForm));
        setTimeout(() => {
            navigate("/ListNews");
          }, 3000);
          console.log(`sending data… ${data.title} ${data.description}`);
    
        clearState()
        
    }
    return (

        
            <div className="contact">
            <h3>Create news</h3>
            <form className="form" onSubmit={handleSubmit}  >
                <input 
                    className="form__input"
                    type="text" 
                    placeholder="title" 
                    value={data.title} 
                    onChange={handleInputChange} 
                    name="title" 
                    />
                    <textarea
                    className="form__input" 
                    type="text" 
                    placeholder="description" 
                    value={data.description} 
                    onChange={handleInputChange} 
                    name="description" />
                    <button className="form__button" type="submit" disabled={btnDisabled}>Enviar</button>
                    <p>{message}</p>
                </form>
            </div>
    )     
}
