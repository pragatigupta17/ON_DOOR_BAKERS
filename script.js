// cart()
// async function cart(){

//     let data = await fetch("http://localhost:3000/order1");
//     let response = await data.json();
//     console.log(response);
//     let all_data=response.map((e)=>{
//         return`
//          <div class="box">
//           <div class="image">
//             <img src=${e.imageurl} alt="" />
//           </div>
//           <div class="content">
//             <h3>${e.name}</h3>
//             <div class="stars">
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//             </div>
//             <span class="price">${e.price}rs</span>
//             <a href="#" class="btn">add to cart</a>
//           </div>
//         </div>`  
//     })

    let set=document.querySelector(".box-container")
    console.log(set.innerHTML)
     set.innerHTML=all_data.join("");

     console.log(all_data)
}



function addtocart(e){
    let a =document.querySelector('#container');
    
 
        a.style.display="block";
     
    
    
}
function closeAddtocart(e){
    let a =document.querySelector('#container');
    a.style.display="none"
}

function information(){
  let name=document.querySelector('#name').value
  let mail=document.querySelector('#email').value
  let phone=document.querySelector('#phone').value
  let order=document.querySelector('#email').value
  let date=document.querySelector('#date').value
  let time=document.querySelector('#time').value
  let request=document.querySelector('#special_request').value

   console.log(information)
}


