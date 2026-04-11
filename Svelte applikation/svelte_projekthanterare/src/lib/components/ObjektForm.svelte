<script>
    let name = $state("")
    let startDatum = $state("")
    let slutDatum = $state("")
    let prioritet = $state("default")

    async function handleSubmit () {
		const res = await fetch('http://localhost:3000/projekt', {
			method: 'POST',
            headers: {"Content-Type":"application/json"},
			body: JSON.stringify({
                name,
                startDatum,
                slutDatum,
                prioritet
			})
		})
		
		const json = await res.json()
        console.log( name,
                startDatum,
                slutDatum,
                prioritet)
	}
</script>

<form>
        <label>Namn:
            <input 
                bind:value={name}
                type="text" 
                placeholder="Projekt namn" 
            />
        </label>
        <label>Startdatum:
            <input 
                bind:value={startDatum}
                type="date" 
                placeholder="Startdatum" 
            />
        </label>
        <label>Startdatum:
            <input 
                bind:value={slutDatum}
                type="date" 
                placeholder="Slutdatum" 
            />
        </label>
        <label>Prioritet:
            <select 
                bind:value={prioritet}
                name="priority" 
                id="priority"
            >
                <option value="default">Välj...</option>
                <option value="Hög">Hög</option>
                <option value="Medium">Medium</option>
                <option value="Låg">Låg</option>
            </select>
        </label>

        <button 
            onclick={handleSubmit}
            id="objektFormSubmitButton" 
            type="submit"
        >
        Lägg till</button>
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