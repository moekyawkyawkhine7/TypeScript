"use strict";
function kgToLb(weight) {
    if (typeof weight === "number")
        return weight * 3;
    else
        return parseInt(weight) * 5;
}
kgToLb(10);
kgToLb("50");
//# sourceMappingURL=union_type.js.map