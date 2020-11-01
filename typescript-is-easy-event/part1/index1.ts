const x : number = 3;
const str : string = "Sandro";

const fn = (name:string) : string => {
    return name.split("").reverse().join("");
}

console.log(fn("sandro"));

type language = "JS" | "TS" | "Node";

interface Coder {
    name: string,
    age: number,
    lang: language
}

let myUnion: string | number = "s";
myUnion = 13;
//myUnion = [3]

const any : any = "4";

const num : number = any;

const ukn : unknown = 3;

const string : string = ukn as string;

const typeNarrowing = (arg: unknown) : void =>{
    if(typeof arg === "number"){
        let b : number = arg;
    } else{
        // let c : number = arg
    }
}

const earlyTermination = (arg: string | null) : number => {
    if(arg === null){
        return 0;
    }
    return arg.length
}


type type1 = "one" | "two" | "tree";

type type2 = Exclude<type1, "one">;

interface toPartial  {
    name:string,
    age: number
}

interface partial1 {
    name? :string,
    age? : number
}

type partial2 = Partial<toPartial>;

const user : partial2 = {
    name: "sandro"
}
//user.name = "other"
const user2 : partial1 = {
    age: 12
}

//partial1 === partial2

//Required<T> is reverse of Partial<T>

interface readonlyInt {
    readonly name: string
}

const user3 :readonlyInt = {
    name: "sandro"
}
//user3.name = "othername" || prevented

/*
Pick
*/
interface bigInterface {
    name: string,
    street: string,
    age: number,
    male: boolean,
    id: number,
    hobbies: Array<string>,
    favhobby: Object
}

type smallInterface = Pick<bigInterface, "name"|"age"|"id">

//Omit is reverse of Pick


/* Generic Functions*/

const makeLastName = <T extends {firstName: string, lastName:string}> (obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

console.log(makeLastName({firstName:"Jon", lastName:"Cash", age: 33}))

const genericFN = <T> (arg:T) : number => {
    return [arg].length;
}
console.log(genericFN<string>("sandro"))
