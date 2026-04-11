import "./Projekt.css"
import ProjektObjekt from "@/components/ProjektObjekt.jsx";
import ObjektForm from "@/components/ObjektForm.jsx";
import React, {useState, useEffect} from "react"
function Projekt(){
    const [table, setTable] = useState([]);

    const handleAdd = (formData) =>{
        console.log(formData)
        setTable([...table,formData])
    }
    useEffect(()=>{
        fetch('http://localhost:3000/projekt')
            .then(res => {
                return res.json();
            })
            .then((data)=> {
                console.log (data)
                setTable(data);
            })
            
    }, [])
    return(
        <div className="page">
            <div id="addProjektSection">
                <h1 id="pageTitle">Projekt</h1>
                <ObjektForm onSubmit={handleAdd}/>
            </div>
            <table id="projektTabell">
                <thead>
                    <tr>
                        <th>Projekt namn</th>
                        <th>Startdatum</th>
                        <th>Slutdaturm</th>
                        <th>Prioritet</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((t, index) => (
                        <ProjektObjekt 
                        key={index}
                        namn={t.namn}
                        startDatum={t.startDatum}
                        slutDatum={t.slutDatum}
                        prioritet={t.prioritet} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Projekt;