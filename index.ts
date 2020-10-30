interface SomeObject {
    name: string,
    age: number,
    hobbies: Array<string>
}

const Sandro : SomeObject = {
    name: "Sandro",
    age: 18,
    hobbies: ["Code", "Football", "Books"]
}

interface User {
    name: string,
    age: number
}

class UserInfo{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const user1 : User = new UserInfo("Ronny", 19);

const getUser = () :  User => {
    return{
        name: "random",
        age: 20
    }
}

type myBool = true | false ;

const truth : myBool = true;


const wrapInArray = (input: string|string[]) :  string[] => {
    if(typeof input === "string"){
        return [input]
    }
    return input;
}

console.log(wrapInArray(["sandro"]));

const myArr : Array<string|number> = ["1", 1];

type ElectionChoices = "ocneba" | "enm" | "girchi" | undefined

const vote : ElectionChoices = undefined