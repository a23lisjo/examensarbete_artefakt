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