
async function get_data_add_to_cart(data){
    
    // console.log(data)

    let data_info=await fetch("http://localhost:3000/order1");
    let response =await data_info.json();
    let select_data =response.filter(e=>e.id===data)
    let answer=select_data.map((e)=>{return(
     ` <div class="cart_item">
          <img src=${e.imageurl} alt=" " />
          <div class="details">
            <h3>${e.name}</h3>
            <p>Sugarfree healty cookies</p>
            <p class="price">Rs${e.price}<span class="discount">(10% off)</span></p>
            <p class="info">Delivery in 30 minutes</p>
          </div>
          <button class="remove">X</button>
        </div>`
    )});
    console.log(answer)
    // let past=document.querySelector(".cart_container");
    // past.innerHTML=answer
    
}

let data=JSON.parse(localStorage.getItem("add_to_cart"));
get_data_add_to_cart()
for(let i=0;i<data.length;i++){
  get_data_add_to_cart(data[i])
}
