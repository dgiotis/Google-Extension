let myleads=[]

const inputel=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const resetbtn=document.getElementById("clear-btn")
const ulel=document.getElementById("ul-el")

let name=localStorage.getItem("myleads")

inputbtn.addEventListener("click", function() {
    // CKECK IF VALUE IS NULL
    if (inputel.value==="" ){
        return 0;
    //CHECK IF VALUE IS ALREADY IN THE ARRAY 
    }else if(myleads.includes(inputel.value)){
        return 0;
    // PUSH THE VALUE IN MYLEADS
    }else{
        myleads.push(inputel.value)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        
    }
    
    renderleads()
})


resetbtn.addEventListener("click",function(){
    clear()
    
})




function renderleads(){
    let listitems=""
    for (let i=0; i < myleads.length; i++){
    listitems+=`
            <li>
                <a href='${myleads[i]}' target='_blank'>
                    ${myleads[i]}
                </a>
            </li>
        `
        
    }

    ulel.innerHTML=listitems
}

function clear(){
    inputel.value=""
}