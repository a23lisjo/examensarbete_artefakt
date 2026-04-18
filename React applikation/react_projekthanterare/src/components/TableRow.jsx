import "../pages/Project/Project.css"

function TableRow({wbs, task, duration, predecessors, successors, budget}){
    return(
        <tr>
            <td className= "tableCell">{wbs}</td>
            <td className= "tableCell">{task}</td>
            <td className= "tableCell">{duration}</td>
            <td className= "tableCell">{predecessors}</td>
            <td className= "tableCell">{successors}</td>
            <td className= "tableCell">{budget}</td>
        </tr>
    )
}
export default TableRow;