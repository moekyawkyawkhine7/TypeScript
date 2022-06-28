type UserData = { // type aliases
    id: number,
    // readonly name: string // if you set readonly, you can't modify this data.
    name: string,
    retire: (date: Date) => void
}

let userData: UserData = { // implement type aliases
    id: 1,
    name: "Mg Mg",
    retire: (date: Date) => {
        console.log(`Date :${date}`);
    }
};
// This kind of solution can reduce code duplication. 
// Then, you can share type aliases where you need to implement them.
