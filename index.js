let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);  
    inputEl.value = " ";
    renderLeads();
})

function renderLeads() {
    let listItems = ""
    for( let i = 0; i < myLeads.length; i++) {
        
        // const  li = document.createElement("li")
        // li.textContent = myLeads[i];
        // ulEl.append(li); is another way to write the code line written below
        
        listItems += "<li><a href='#' target='_blank'> " + myLeads[i] + "</a></li>"; 
         
        //  listItems += "<li><a target='_blank' href='" + myLeads[i] + " '>" + myLeads[i] + "</a></li>"; can also be written(avoid it, as to not create confusion)
        
        /*Another way to write the same code line:
        listItems += `
            <li> 
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
            `
        */
    }
    ulEl.innerHTML = listItems;
}
