//const userobjetc=new Object()
const userobjet={}

userobjet.id="123abc"
userobjet.name="santosh"
userobjet.islogedIn=false

// console.log(userobjet )

const regularUser={
    email:"rahulgote@gamil.com",
    fullname:{
        userfullname:{
            firstname:"rahul",
            lastname:"gote"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"l",4:"m"}

const obj3=Object.assign({}, obj1, obj2)

const obj4={...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)

// console.log(userobjet)

// console.log(Object.keys(userobjet))
// console.log(Object.values(userobjet))
// console.log(Object.entries(userobjet))

// console.log(userobjet.hasOwnProperty("name"));

const course={
    coursname:"fullstack Developer",
    price:"40000",
    Institutename:"giris Techhub"
}

const {Institutename}=course

console.log(Institutename)

const{Institutename:institute}=course
console.log(institute)