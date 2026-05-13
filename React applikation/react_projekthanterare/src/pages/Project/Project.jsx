import "./Project.css"
import TableRow from "@/components/TableRow.jsx";
import Form from "@/components/Form.jsx";
import React, {useState, useEffect} from "react"
function Project(){
    const [table, setTable] = useState([]);

    const handleAdd = (formData) =>{
        //console.log(formData)
        setTable([...table,formData])
    }
    useEffect(()=>{
        fetch('http://localhost:3000/project')
            .then(res => {
                return res.json();
            })
            .then((data)=> {
                //console.log (data)
                setTable(data);
            })
            
    }, [])
    return(
        <div className="page">
            <div id="addProjectSection">
                <h1 id="pageTitle">Projects</h1>
                <Form onSubmit={handleAdd}/>
            </div>
            <table id="projectTable">
                <thead>
                    <tr>
                        <th>WBS</th>
                        <th>Task</th>
                        <th>Duration</th>
                        <th>Predecessors</th>
                        <th>Successors</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((t, index) => (
                        <TableRow 
                        key={index}
                        wbs={t.WBS}
                        task={t.Task}
                        duration={t.Duration}
                        predecessors={t.Predecessors} 
                        successors={t.Successors}
                        budget={t.Budget}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Project;