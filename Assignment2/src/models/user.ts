class User {
    userId:number;
    firstName:string;
    lastName:string;
    emailAddress:string;

    constructor(userId:number,firstName:string,lastName:string,emailAddress:string){
        this.userId=userId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailAddress=emailAddress;
    }
}

//This allows other methods to use this class
export{User};