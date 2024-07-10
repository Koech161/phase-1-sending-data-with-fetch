// Add your code here
const submitData={
    name:"Steve",
    email:"steve@steve.com",
}
const configurationObject ={
    method:"POST",
    headers:{
        "content-Type":"application/json",
        "accept":"application/json",
    },
    body:JSON.stringify(submitData),
}
fetch("http://localhost:3000/users",configurationObject)
.then(function(response){
    return response.json()
})
.then(function(data){

})
.catch(function(error){
    alert('error detected')
})