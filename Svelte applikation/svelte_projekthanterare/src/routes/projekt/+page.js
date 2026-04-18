export async function load ({fetch}){
    const res = await fetch ('http://localhost:3000/project')
    const data = await res.json();

    console.log("data:", data)
    return {
        formList: data
    };
}