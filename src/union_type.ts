function kgToLb(weight: number | string): number { // union type help you this kind of feature
    if (typeof weight === "number")
        return weight * 3;
    else
        return parseInt(weight) * 5;
}
kgToLb(10);
kgToLb("50");
// you can use one or more data types of function parameters by using union type feature