//Import function from database that gets a copy of hauler ships data array
import { getHaulingShips, getShippingShips } from "./database.js"

//Export and define the function that is responsible for generating the HTML string for the DOM
export const haulerList = () => {
    //Invoke the function that will return a copy of the hauler ships data array and store it in a variable
    const haulers = getHaulingShips()
    
    let haulersHTML = "<ul>"
    
    for (const hauler of haulers) {
        //Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `<li data-id="${hauler.id}" 
        data-type="hauler">
        ${hauler.name}
        </li>`
    }
    
    haulersHTML += "</ul>"
    
    return haulersHTML
}

//A click event listener that displays the number of ships each hauler is carrying 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            
            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()
            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId) {
                // Increase the counter by 1
                    shipCounter++
                }

                window.alert(`This hauler is carrying ${shipCounter} shipping ships.`)
            }
        }
    }
)