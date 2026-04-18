import React, {useState} from "react"

const Form = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        wbs:"",
        task:"",
        duration:"",
        predecessors:"",
        successors:"",
        budget:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        onSubmit(formData); 
       
        fetch("http://localhost:3000/project", {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formData)
        }).then (()=>{
            console.log("Data added")
        })
         setFormData({ wbs: "", task: "", duration: "", predecessors: "", successors:"", budget:""});
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>WBS:
                <input 
                    onChange={(e) => setFormData({...formData, wbs:e.target.value})} 
                    wbs="wbs" 
                    value={formData.wbs} 
                    type="text" 
                    placeholder="WBS" 
                />
            </label>
            <label>Task:
                <input 
                    onChange={(e) => setFormData({...formData, task:e.target.value})} 
                    name="task" 
                    value={formData.task} 
                    type="text"
                    placeholder="task" 
                />
            </label>
            <label>Duration:
                <input 
                    onChange={(e) => setFormData({...formData, duration:e.target.value})} 
                    name="duration" 
                    value={formData.duration} 
                    type="text"
                    placeholder="duration" 
                />
            </label>
            <label>Predecessors:
                 <input 
                    onChange={(e) => setFormData({...formData, predecessors:e.target.value})} 
                    name="predecessors" 
                    value={formData.predecessors} 
                    type="text" 
                    placeholder="predecessors" 
                />
            </label>
            <label>Successors:
                 <input 
                    onChange={(e) => setFormData({...formData, successors:e.target.value})} 
                    name="successors" 
                    value={formData.successors} 
                    type="text" 
                    placeholder="successors" 
                />
            </label>
            <label>Budget:
                 <input 
                    onChange={(e) => setFormData({...formData, budget:e.target.value})} 
                    name="budget" 
                    value={formData.budget} 
                    type="text"
                    placeholder="budget" 
                />
            </label>

            <button id="FormSubmitButton" type="submit">Add</button>
        </form>
    )
    
}

export default Form;