<script>
    let {namn, startDatum, slutDatum, prioritet} = $props();
</script>

 <tr>
    <td class= "projektObjekt">{namn}</td>
    <td class= "projektObjekt">{startDatum}</td>
    <td class= "projektObjekt">{slutDatum}</td>
    <td class= "projektObjekt">{prioritet}</td>
</tr>

<style>
    tr:nth-child(even) {background-color: #e8e8e8;
}
tr:hover{
    background-color: #adadad;
}

.projektObjekt{
    border-collapse: collapse;
    border: 1px solid rgb(100, 100, 100)
}

</style>