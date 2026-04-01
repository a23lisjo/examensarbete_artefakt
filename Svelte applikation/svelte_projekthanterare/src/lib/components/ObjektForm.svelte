<form>
        <label>Namn:
            <input type="text" placeholder="Projekt namn" />
        </label>
        <label>Startdatum:
            <input type="date" placeholder="Startdatum" />
        </label>
        <label>Startdatum:
            <input type="date" placeholder="Slutdatum" />
        </label>
        <label>Prioritet:
            <select name="priority" id="priority">
                <option value="high">Hög</option>
                <option value="medium">Medium</option>
                <option value="low">Låg</option>
            </select>
        </label>

        <button id="objektFormSubmitButton" type="submit">Lägg till</button>
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