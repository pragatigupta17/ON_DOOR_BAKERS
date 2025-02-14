cart()
async function cart(){

    let data = await fetch("http://localhost:3000/order1");
    let response = await data.json();
    console.log(response);
    let all_data=response.map((e)=>{
        return`
         <div class="box">
          <div class="image">
            <img src=${e.imageurl} alt="" />
          </div>
          <div class="content">
            <h3>${e.name}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <span class="price">${e.price}rs</span>
            <a href="#" class="btn" onClick="addtocartbtn('${e.id}')">add to cart</a>
          </div>
        
        </div>`  
    })

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






// cart of this add to cart 

let  arr=[];
function addtocartbtn(e){
    arr.push(e);
    console.log(e)
    console.log(arr)
    displayAdd_to_bag()
    let data=localStorage.setItem("add_to_cart",JSON.stringify(arr))
}

function displayAdd_to_bag(){
    let cart=document.querySelector(".icon span")
    let leght =arr.length
    cart.innerHTML=leght;
   
    // console.log(cart)
}
// cart of this add to cart


// get_data_add_to_cart()




function filter(){
    let data=JSON.parse(localStorage.getItem("add_to_cart"));
    console.log(data)
    // for(let i=0;i<data.length;i++){
    //     console.log(data[i])
    // }
}

filter()

