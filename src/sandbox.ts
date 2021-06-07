type StringOrNumber = number | string;
type ObjWithName = { name : string , uid : StringOrNumber}

const logDetails = ( user: ObjWithName, item : string ) => {
    console.log("Item is " + item + ". UID is " + user);
}

logDetails({name:"ahmet", uid: 5}, "sabun");