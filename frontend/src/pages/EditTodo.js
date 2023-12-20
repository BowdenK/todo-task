import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"
const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const fetchTodo = async () => {
        let data = await getTodo(id)
        setToUpdate(data)
    }
    
    const submitHandler = async () => {
        let obj = {
            _id: toUpdate._id,
            text: userInput
        }

        await updateTodo(obj)
        await fetchTodo()
        alert('edited item')
    }

    useEffect(() => {
        async function start(){
        await fetchTodo()
        }
        start()
    },[])
    return (
        <div>
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>
            <input 
                text="text"
                value={userInput}
                onChange={(e) => {setUserInput(e.target.value)}}
            />
            <button onClick={submitHandler}>submit</button>
        </div>
    )
}
export default EditTodo