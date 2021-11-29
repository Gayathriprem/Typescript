export{}
let CourseIdAutoIncrement=1000;
let UserIdAutoIncrement=100;

class User{
    UserId:string;
    UserName:string;
    UserAge:number;
    Mobilenumber:number;
    constructor(paramname:string,paramage:number,parammobilenumber:number)
    
    {   
        this.UserName=paramname;
        this.UserAge=paramage;
        this.Mobilenumber=parammobilenumber;
        this.UserId="UI"+UserIdAutoIncrement.toString();
    }

}
class CourseInfo{
    CourseId:string;
    CourseName:string;
    RequiredDays:number;
    userId:string;
    constructor(paramcourseId:string,paramcoursename:string,paramRequireddays:number,paramuserid:number)
    {
        this.CourseId="C" +CourseIdAutoIncrement.toString();
        this.CourseName=paramcoursename;
        this.RequiredDays=paramRequireddays; 

    }

}

let UserArrayList:Array<User>=new Array<User>();
UserArrayList.push(new User("Rahul",26,9787966893));

let CourseInfoList:Array<CourseInfo>=new Array<CourseInfo>();
CourseInfoList.push(new CourseInfo("C1001","Python",30,"UI101"));


function newuser()
{

    var UserName =document.getElementById("username")as HTMLInputElement;
    var UserAge =document.getElementById("userAge")as HTMLInputElement ;
    var Mobilenumber =document.getElementById("Mobilenumber")as HTMLInputElement;

    document.getElementById("newuser").style.display="block";
    document.getElementById("login").style.display="none";
   



}

function login()
    {
    let userid=document.getElementById("userid")as HTMLInputElement;

    if(userid.value==""){
        alert("please enter valid userid")
    }
    else{
       
    }
   
    }
