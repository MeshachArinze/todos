document.addEventListener("DOMContentLoaded", function(){

    //add and iife function
    let app = (function(){
        //alert("it working")
        let theContainer = (cont) =>{
           let con = document.querySelector(".container");
           if(con.classList.contains("container")){
               con.classList.add("wrapper");
               con.style.transition = "color 0.5s ease-in-out";
               con.setAttribute("id", "head")
           }
        } 
        theContainer();
    })();

    let sect = ()=>{
        let header = document.querySelector("Header"),
        text = document.querySelector("h1").innerHTML = "A simple todolist by Ekene",
        sub_text = document.querySelector("span code").style.display = "flex";
        sub_text = document.querySelector("header span code").textContent = "Ekene code";
    }
    sect();

    /*let myForm = ()=>{
        let form = document.querySelector(".task_input");
        form.addEventListener("submit", function(){
            let inp = document.querySelector('.task_input input[type="text"]');
            if(inp.value.length <= 20){
                //alert("pls type something")
                inp.style.borderColor = "green";
                inp.focus();
            } else{
                inp.style.color = "red";
                inp.style.borderColor = "yellow";
                inp.focus();
            }
            
        })
    }
    myForm(); */

    let ullist = (function(){
        let ul = document.querySelector("ul"),
        ulspan = document.querySelector("ul span"),
        ulList  = document.querySelectorAll("ul li");
        Array.from(ulList).forEach(item =>{
            console.log(item)
        })

        let mylist = document.getElementsByTagName("li");
        for(let i = 0; i < mylist.length; i++){
        let newElem = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        newElem.className = "close";
        newElem.appendChild(txt);
        mylist[i].appendChild(newElem)
        }

        let myul = document.querySelector("section ul");
        myul.addEventListener("click", (l)=>{
            if(l.target.className == "close"){
                const lit = l.target.parentElement;
                myul.removeChild(lit)
            }
        })
        let addForm = document.forms['addform'];
    addForm.addEventListener("submit", e=>{
        e.preventDefault();
        let value = addForm.querySelector('input[type="text"]').value;
        let formBtn = document.querySelector("button");
        alert("pls type something")

        //create element
        let newLi = document.createElement("li");
        let deleteLi = document.createElement("span");
        let litxt = document.createElement("span")

        //add content
        litxt.textContent = value;
        litxt.className = "text";
        deleteLi.textContent = "\u00D7";
        deleteLi.className = "close"
        //append to document

        newLi.appendChild(litxt);
        newLi.appendChild(deleteLi);
        myul.appendChild(newLi);
    })        
    })()
    
})
