


///This function will add the list to the pending task div
function AddList(){
    let addButton = document.getElementById("AddButton");
    
    
    addButton.addEventListener("click",()=>{
        let inputData = document.getElementById("Task").value;
        let pendingLI = document.querySelector(".pending-task").getElementsByTagName("ul")[0]
        pendingLI.innerHTML += `<li>${inputData}</li>`     
    })  
}

function main(){
    AddList()
}

main()