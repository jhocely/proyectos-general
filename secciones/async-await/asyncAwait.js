let promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        let resp = {
            resolve: 200,
            description: '1 esta info es importante'
        }
        resolve(resp.description)
    }, 3000);
})

let promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        let resp = {
            resolve: 200,
            description: '2 esta info es importante'
        }
        resolve(resp.description)
    }, 5000);
})

let promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        let resp = {
            resolve: 200,
            description: '3 esta info es importante'
        }
        resolve(resp.description)
    }, 2500);
})

async function ejecutarPromesas() {
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1);

    let respuestaProm2 = await promesa2
    console.log(respuestaProm2);

    let respuestaProm3 = await promesa3
    console.log(respuestaProm3);
}

ejecutarPromesas()