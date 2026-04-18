 <script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Form from '$lib/components/Form.svelte';
    import TableRow from '$lib/components/TabelRow.svelte';
 
    let {data} = $props ();
    let formList = $state([])
    let initialized = false;

    $effect(() => {
        formList = data.formList ?? [];
    });
    
    function addNewTr (jsonData){
        formList = [... formList, jsonData]
    }
 </script>

 <Navbar/>

 <div class="page">
    <div id="addProjectSection">
        <h1 id="pageTitle">Projects</h1>
        <Form tRow={addNewTr}/>
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
            {#each formList as tRow}
                <TableRow {tRow}/>
            {/each}
        </tbody>
    </table>
    
</div>

<style>
#pageTitle{
    color:#3038d6;
}

#projectTable{
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

#addProjectSection{
    border: 1px grey solid;
    box-shadow: 5px 5px #d7d9ff;
    padding: 1em;
}

</style>