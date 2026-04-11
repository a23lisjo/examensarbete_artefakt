import React, {useState} from "react"

const ObjektForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({
        namn:"",
        startDatum:"",
        slutDatum:"",
        prioritet:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        onSubmit(formData); 
       
        fetch("http://localhost:3000/projekt", {
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formData)
        }).then (()=>{
            console.log("Data added")
        })
         setFormData({ namn: "", startDatum: "", slutDatum: "", prioritet: "" });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Namn:
                <input 
                    onChange={(e) => setFormData({...formData, namn:e.target.value})} 
                    name="namn" 
                    value={formData.namn} 
                    type="text" 
                    placeholder="Projekt namn" 
                />
            </label>
            <label>Startdatum:
                <input 
                    onChange={(e) => setFormData({...formData, startDatum:e.target.value})} 
                    name="startDatum" 
                    value={formData.startDatum} 
                    type="date" 
                    placeholder="Startdatum" 
                />
            </label>
            <label>Slutdatum:
                <input 
                    onChange={(e) => setFormData({...formData, slutDatum:e.target.value})} 
                    name="slutDatum" 
                    value={formData.slutDatum} 
                    type="date" 
                    placeholder="Slutdatum" 
                />
            </label>
            <label>Prioritet:
                <select 
                    onChange={(e) => setFormData({...formData, prioritet:e.target.value})} 
                    name="prioritet" value={formData.prioritet} 
                    id="prioritet"
                >
                    <option value="default">Välj...</option>
                    <option value="Hög">Hög</option>
                    <option value="Medium">Medium</option>
                    <option value="Låg">Låg</option>
                </select>
            </label>

            <button id="objektFormSubmitButton" type="submit">Lägg till</button>
        </form>
    )
    
}

export default ObjektForm;