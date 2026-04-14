<script>
    let {tabellRad} = $props();
</script>

 <tr>
    <td class= "projektObjekt">{tabellRad.name}</td>
    <td class= "projektObjekt">{tabellRad.startDatum}</td>
    <td class= "projektObjekt">{tabellRad.slutDatum}</td>
    <td class= "projektObjekt">{tabellRad.prioritet}</td>
</tr>

<style>
    tr:nth-child(even) {
        background-color: #e8e8e8;
    }
    tr:hover{
        background-color: #adadad;
    }

    .projektObjekt{
        border-collapse: collapse;
        border: 1px solid rgb(100, 100, 100)
    }

</style>