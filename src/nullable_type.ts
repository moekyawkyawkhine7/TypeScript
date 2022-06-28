function getName(name: string | null | undefined) {
    if (name)
        console.log("Name: ", name);
    else 
        console.log("Hola!");
}
getName(null);