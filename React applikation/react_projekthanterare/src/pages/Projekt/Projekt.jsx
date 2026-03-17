import "./Projekt.css"
import ProjektObjekt from "@/components/ProjektObjekt.jsx";

function Projekt(){
    return(
        <div className="page">
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
                    <ProjektObjekt
                        namn = "Projekt1"
                        startDatum = "170326"
                        slutDatum = "200326"
                        prioritet = "hög"
                    />
                     <ProjektObjekt
                        namn = "Projekt2"
                        startDatum = "170326"
                        slutDatum = "200326"
                        prioritet = "hög"
                    />
                     <ProjektObjekt
                        namn = "Projekt2"
                        startDatum = "170326"
                        slutDatum = "200326"
                        prioritet = "hög"
                    />
                </tbody>
            </table>
        </div>
    )
}

export default Projekt;