type Person = {
    birthday: Date
}

let person: Person = {
    birthday: new Date()
}

function getPerson(id: number): Person | null {
    return id === 0 ? null : {
        birthday: new Date()
    };
}
let customer = getPerson(7);
// optional property access operator
console.log("Customer :", customer?.birthday.getFullYear()) // if customer return null, it return undefined.

// optional element access operator
// console.log("Single Customer :", customers?.[0])

// optional call
let log: any= null
log?.();