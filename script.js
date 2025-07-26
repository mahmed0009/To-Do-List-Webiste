let tasks = []


///This function will add the list to the pending task div
let index = 0
function Tasks() {
    let addButton = document.getElementById("AddButton");

    // This will add the task to the list
    addButton.addEventListener("click", () => {
        let inputData = document.getElementById("Task").value;

        if (inputData == "") {
            alert("Enter a task first")
        } else {
            let pendingLI = document.querySelector(".all-task").getElementsByTagName("ul")[0]
            console.log
            tasks.push(inputData)

            for (index; index < tasks.length; index++) {
                pendingLI.innerHTML += `<li>
                                            <div class="text">
                                                    ${tasks[index]}
                                                </div>
                                                <div class="icons">
                                                    <button class="done">
                                                        Done
                                                    </button>
                                                    <button class="delete">
                                                        Delete
                                                    </button>
                                                </div>
                                        </li>`
            }
            document.getElementById("Task").value = "";
        }
    })


    // This will handle with done and delete buttons
    document.querySelector(".all-task").addEventListener("click", e => {
        // This will delete the task 

        if (e.target.classList.contains("delete")) {
            const li = e.target.closest("li");
            li.remove()
            const text = li.querySelector(".text").innerHTML.trim()

            for (let i = 0; i < tasks.length; i++) {
                if (text == tasks[i]) {
                    tasks.splice(i, 1)
                }
            }
        }



        // This will make the task done

        else if (e.target.classList.contains("done")) {
            let doneBut = e.target.closest("li").querySelector(".done")
            
            if (doneButt = doneBut.innerHTML.trim() == "Undo") { 
                e.target.closest("li").querySelector(".text").style.textDecoration = "none"
                e.target.closest("li").querySelector(".text").style.color = "black"
                doneBut.innerHTML = "Done"
                doneBut.style.backgroundColor = "#4caf50"
            }
            else{
                e.target.closest("li").querySelector(".text").style.textDecoration = "line-through"
                e.target.closest("li").querySelector(".text").style.color = "#999999"
        
        
                doneBut.style.backgroundColor = "grey"
                doneBut.innerHTML = "Undo"
            }
 
        }
    })



}




function main() {
    Tasks()
}

main()