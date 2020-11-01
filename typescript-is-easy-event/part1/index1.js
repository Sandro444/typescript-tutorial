var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var x = 3;
var str = "Sandro";
var fn = function (name) {
    return name.split("").reverse().join("");
};
console.log(fn("sandro"));
var myUnion = "s";
myUnion = 13;
//myUnion = [3]
var any = "4";
var num = any;
var ukn = 3;
var string = ukn;
var typeNarrowing = function (arg) {
    if (typeof arg === "number") {
        var b = arg;
    }
    else {
        // let c : number = arg
    }
};
var earlyTermination = function (arg) {
    if (arg === null) {
        return 0;
    }
    return arg.length;
};
var user = {
    name: "sandro"
};
//user.name = "other"
var user2 = {
    age: 12
};
var user3 = {
    name: "sandro"
};
//Omit is reverse of Pick
/* Generic Functions*/
var makeLastName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
console.log(makeLastName({ firstName: "Jon", lastName: "Cash", age: 33 }));
var genericFN = function (arg) {
    return [arg].length;
};
console.log(genericFN("sandro"));
//# sourceMappingURL=index1.js.map