import "../pages/Projekt/Projekt.css"

function ProjektObjekt({namn, startDatum, slutDatum, prioritet}){
    return(
        <tr>
            <td className= "projektObjekt">{namn}</td>
            <td className= "projektObjekt">{startDatum}</td>
            <td className= "projektObjekt">{slutDatum}</td>
            <td className= "projektObjekt">{prioritet}</td>
        </tr>
    )
   
}

export default ProjektObjekt;