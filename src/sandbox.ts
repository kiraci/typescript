type StringOrNumber = number | string;
type ObjWithName = { name : string , uid : StringOrNumber}

let logDetails : ( user : ObjWithName, item : string) => void;

logDetails = ( user: ObjWithName, item : string ) => {
    console.log("Item is " + item + ". UID is " + user.uid);
}

logDetails({name:"ahmet", uid: 5}, "sabun");