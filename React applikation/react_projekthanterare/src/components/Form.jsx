import React, {useState, useEffect} from "react"

const Form = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        wbs:"",
        task:"",
        duration:"",
        predecessors:"",
        successors:"",
        budget:""
    })
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const reMap = {
            WBS: formData.wbs,
            Task: formData.task,
            Duration: formData.duration,
            Predecessors: formData.predecessors,
            Successors: formData.successors,
            Budget: formData.budget
        };

        const res = await fetch("http://localhost:3000/project", {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(reMap)
        });

        const jsonData = await res.json();
        onSubmit(reMap); 
       
         setFormData({ wbs: "", task: "", duration: "", predecessors: "", successors:"", budget:""});
    }

    function fillForm(data) {
        setFormData({
            wbs:          String(data.WBS ?? ""),
            task:         String(data.Task ?? ""),
            duration:     String(data.Duration ?? ""),
            predecessors: String(data.Predecessors ?? ""),
            successors:   String(data.Successors ?? ""),
            budget:       String(data.Budget ?? "")
        });
    }

    useEffect(() => {
        window.__fillForm = fillForm;
    }, []);

    return(
        <form onSubmit={handleSubmit}>
            <label>WBS:
                <input 
                    onChange={(e) => setFormData({...formData, wbs:e.target.value})} 
                    name="wbs" 
                    value={formData.wbs} 
                    type="text" 
                    placeholder="e.g:1" 
                />
            </label>
            <label>Task:
                <input 
                    onChange={(e) => setFormData({...formData, task:e.target.value})} 
                    name="task" 
                    value={formData.task} 
                    type="text"
                    placeholder="e.g:Supply and Install New Guide Posts"
                />
            </label>
            <label>Duration:
                <input 
                    onChange={(e) => setFormData({...formData, duration:e.target.value})} 
                    name="duration" 
                    value={formData.duration} 
                    type="text"
                    placeholder="e.g.1" 
                />
            </label>
            <label>Predecessors:
                 <input 
                    onChange={(e) => setFormData({...formData, predecessors:e.target.value})} 
                    name="predecessors" 
                    value={formData.predecessors} 
                    type="text" 
                    placeholder="e.g:1" 
                />
            </label>
            <label>Successors:
                 <input 
                    onChange={(e) => setFormData({...formData, successors:e.target.value})} 
                    name="successors" 
                    value={formData.successors} 
                    type="text" 
                    placeholder="e.g:1" 
                />
            </label>
            <label>Budget:
                 <input 
                    onChange={(e) => setFormData({...formData, budget:e.target.value})} 
                    name="budget" 
                    value={formData.budget} 
                    type="text"
                    placeholder="e.g:1" 
                />
            </label>

            <button id="formSubmitButton" type="submit">Add</button>
        </form>
    )
    
}

export default Form;