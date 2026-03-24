import "./Projekt.css"
import ProjektObjekt from "@/components/ProjektObjekt.jsx";
import ObjektForm from "@/components/ObjektForm.jsx";

function Projekt(){
    return(
        <div className="page">
            <div id="addProjektSection">
                <h1 id="pageTitle">Projekt</h1>
                <ObjektForm/>
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
                        namn = "Projekt3"
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