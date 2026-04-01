 <script>
    import Navbar from '$lib/components/Navbar.svelte';
    import ObjektForm from '$lib/components/ObjektForm.svelte';
    import ProjektObjekt from '$lib/components/ProjektObjekt.svelte';

 </script>

 <Navbar/>

 <div class="page">
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
            <ProjektObjekt namn="Projekt1" startDatum="010426" slutDatum="040426" prioritet="Låg" />

        </tbody>
    </table>
    
</div>

<style>
#pageTitle{
    color:#3038d6;
}

#projektTabell{
    border-collapse: collapse;
    margin-top: 1em;
}
table{
    width: 100%;
}

th{
    border: 1px solid rgb(84, 84, 84);
    background-color: #d7d9ff;
    color:#646cff;
}

tr:nth-child(even) {background-color: #e8e8e8;
}
tr:hover{
    background-color: #adadad;
}

#addProjektSection{
    border: 1px grey solid;
    box-shadow: 5px 5px #d7d9ff;
    padding: 1em;
}

</style>