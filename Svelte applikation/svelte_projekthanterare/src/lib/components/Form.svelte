<script>
    let {tRow} = $props()

    let wbs = $state("")
    let task = $state("")
    let duration = $state("")
    let predecessors = $state("")
    let successors = $state("")
    let budget = $state("")

    async function handleSubmit (event) {
        event.preventDefault();
        
		const res = await fetch('http://localhost:3000/project', {
			method: 'POST',
            headers: {"Content-Type":"application/json"},
			body: JSON.stringify({
                wbs,
                task,
                duration,
                predecessors,
                successors,
                budget
			})
		})
		
		const jsonData = await res.json();
        tRow (jsonData);
        console.log( wbs,
                task,
                duration,
                predecessors,
                successors,
                budget)

        // Rensa formulär
        wbs = ""
        task = ""
        duration = ""
        predecessors = ""
        successors = ""
        budget = ""
	}
</script>

<form  onsubmit={handleSubmit}>
    <label>WBS:
        <input 
            bind:value={wbs}
            type="number" 
            placeholder="e.g: 1" 
        />
    </label>
    <label>Task:
        <input 
            bind:value={task}
            type="text" 
            placeholder="e.g:Supply and Install New Guide Posts" 
        />
    </label>
    <label>Duration:
        <input 
            bind:value={duration}
            type="number" 
            placeholder="e.g: 2" 
        />
    </label>
    <label>Predecessors:
        <input 
            bind:value={predecessors}
            type="number" 
            placeholder="e.g:5" 
        />
    </label>
     <label>Successors:
        <input 
            bind:value={successors}
            type="number" 
            placeholder="e.g:4" 
        />
    </label>
     <label>Budget:
        <input 
            bind:value={budget}
            type="number" 
            placeholder="e.g: 6800" 
        />
    </label>

    <button 
        id="formSubmitButton" 
        type="submit"
    >
    Add</button>
</form>


<style>
form{
    display: flex;
    justify-content: space-between;
}

button {
  border-radius: 8px;
  border: 2px solid rgb(167, 167, 167);
  font-size: 0.7em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  color:black;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
  background-color:#d7d9ff;
}
button:focus,
button:focus-visible {
  outline: 4px auto #353baa;
  background-color:#d7d9ff;
}
</style>