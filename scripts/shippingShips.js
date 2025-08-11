//Import function from database that gets a copy of shipping ships data array
import { getShippingShips, getHaulingShips } from "./database.js"

//Export and define the function that is responsible for generating the HTML string for the DOM
export const shippingShipsList = () => {
    //Invoke the function that will return a copy of the shipping ships data array and store it in a variable
    const shippingShips = getShippingShips()
    
    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        //Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `<li data-id="${ship.haulerId}"
                                  data-name="${ship.name}"
                                  data-type="shipping_ship">${ship.name}</li>`        
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shipping_ship") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.id
            
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            
            // Iterate the array of hauler objects
            const haulers = getHaulingShips()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler.name
                
                }

            }
            // Show an alert to the user with this format...
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip}.`)
            // Palais Royal is being hauled by Seawise Giant
        }
    }
)