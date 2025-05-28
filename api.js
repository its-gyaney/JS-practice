const userData = [
    {
    name: "Gyanendra",
    age: 24,
    hasPassedOut: false,
    occupation: undefined,
},

{
    name: "Ashok",
    age: 20,
    hasPassedOut: false,
    occupation: "intern",
},

{
    name: "Ashish",
    age: 24,
    hasPassedOut: true,
    occupation: "swe",
}
]

const apiResponse = {
    statusCose: 200,
    massage: "user data fetched succefully",
    data: userData
}

const getUserName =() => {
    if(apiResponse.statusCose === 200){
        const result = apiResponse.data.filter((user)=>user.occupation && user.age>20).map((user) => user.name)
        return result
    }
    return[]
}
console.log(getUserName())