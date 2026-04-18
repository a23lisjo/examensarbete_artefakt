<script>
    let {tRow} = $props();
</script>

 <tr>
    <td class= "tableCell">{tRow.WBS}</td>
    <td class= "tableCell">{tRow.Task}</td>
    <td class= "tableCell">{tRow.Duration}</td>
    <td class= "tableCell">{tRow.Predecessors}</td>
    <td class= "tableCell">{tRow.Successors}</td>
    <td class= "tableCell">{tRow.Budget}</td>
</tr>

<style>
    tr:nth-child(even) {
        background-color: #e8e8e8;
    }
    tr:hover{
        background-color: #adadad;
    }

    .tableCell{
        border-collapse: collapse;
        border: 1px solid rgb(100, 100, 100)
    }

</style>