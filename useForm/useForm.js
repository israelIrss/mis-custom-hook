import React,{useState} from 'react'
//sirve para guardar campos de un input
//este es un ejemplo de uso 
// const[{descripcion},handleInputChange]= useForm({
//     descripcion: ''
// });
//enn el onchange se coloca el 
// onChange={handleInputChange}


export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState)
    const reset = () => {
        setValues(initialState);
    }
    const handleInputChange=({target})=>{
       
        setValues({
            ...values,
            [target.name]:target.value
 
        })
 
     }
     return[values,handleInputChange,reset]



}
