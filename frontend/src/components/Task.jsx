import { useState,useEffect } from "react"
//import(useState)


const Task = (props) => {
    
    const mixWord = (word) => word.split('').sort(x => Math.random()*2-1).join().replaceAll(',','')
    const task = props.data
    const[solution, setSolution] = useState("")
    const[mixedWord,setMixedWord] = useState(mixWord(task.word4))
    const[win,setWin] = useState(false);
    useEffect(() => {
        setWin(task.word4 === solution ? true : false);
    },[solution])

    useEffect(() => {
        setMixedWord(mixWord(task.word4))
    },[props])
    return(
        <div className={win?"greenBorder":""}>
            <div>{task.word1}</div>  
            <div>{task.word2}</div>
            <div>{task.word3}</div>
            <div>{mixedWord}</div>
            <input type="text" value={solution} onChange={(e) => 
            {
                setSolution(e.target.value) 
            }}/>
        </div>
    )
}

export default Task