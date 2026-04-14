export async function load ({fetch}){
    console.log("load körs");
    const res = await fetch ('http://localhost:3000/projekt')
    const data = await res.json();

    console.log("data:", data)
    return {
        formLista: data
    };
}