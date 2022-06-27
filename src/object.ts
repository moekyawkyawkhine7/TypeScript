let employee = { id: 1 };
// employee.name = "Mg Mg"; // It is valid in Js. But it is invalid in TypeScript.
// So, how do I use it in TypeScript?
let employeeData: {
    id: number,
    // readonly name: string // if you set readonly, you can't modify this data.
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Mg Mg",
    retire: (date: Date) => {
        console.log(`Date :${date}`);
    }
};
employeeData.id = 3;
// If you wanna prevent modifying data, you can set "readonly".
employeeData.name = "Zaw Zaw";