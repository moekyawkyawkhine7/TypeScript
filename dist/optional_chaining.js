"use strict";
let person = {
    birthday: new Date()
};
function getPerson(id) {
    return id === 0 ? null : {
        birthday: new Date()
    };
}
let customer = getPerson(7);
console.log("Customer :", customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log();
//# sourceMappingURL=optional_chaining.js.map