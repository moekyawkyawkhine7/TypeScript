// const Small = 1;
// const Medium = 2;
// const Large = 3;

enum Size { Small = 1, Medium = 2, Large = 3 }; // enum is lists of related constant
let mySize = Size.Small;
console.log("MySize: ", mySize)
// if you wanna optimize above code, you can use like this.
const enum OldSize { Small = 1, Medium = 2, Large = 3 };
let myOldSize = OldSize.Medium;
console.log("MyOldSize: ", myOldSize)