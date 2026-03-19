function ObjetkForm(){
    return(
        <form>
            <input type="text" placeholder="Projekt namn" />
            <input type="date" placeholder="Startdatum" />
            <input type="date" placeholder="Slutdatum" />
            <button type="submit">Lägg till</button>
        </form>
    )
}
export default ObjetkForm;