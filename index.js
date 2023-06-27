


// 1 

let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((v)=>{
  return v.json()
}).then((constest)=>{
  console.log(constest)
   ihtml=""
  for(item in constest){
    console.log(constest[item])
    
    ihtml +=`
    <div class="card mx-4" style="width: 25rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzuSHYJRA1EffEokk32MgNH_AWT5rwcRHKuzbCOi8LhPNq8RiV1RxABUd8JgsiRdYVcI&usqp=CAU" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">${constest[item].name}</h5>
     <p>status is :${constest[item].status}
      <p>in 24 hours:${constest[item].status}
       <p>Start at:${constest[item].start_time}
      <p>Start at:${constest[item].end_time}
      <a href="${constest[item].url}" class="btn-primary my-4">visit contest</a>
    </div>
  </div>
    `
  }

  cardcontainer.innerHTML=ihtml
})
/*
//2//3
let n=localStorage.getItem("note")

alert("your note is"+n)
let a=prompt("enter your note")
if(a){
  localStorage.setItem("note",a)
}


//4

let c=confirm("do you want to delete your note")
if(c){
  localStorage.removeItem("note")
  alert("note deleted succsessfully")

}
*/














