"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Small;
console.log("MySize: ", mySize);
;
let myOldSize = 2;
console.log("MyOldSize: ", myOldSize);
//# sourceMappingURL=enum.js.map