//Import function from database that gets a copy of shipping ships data array
import { getShippingShips } from "./database.js"

//Export and define the function that is responsible for generating the HTML string for the DOM
export const shippingShipsList = () => {
    //Invoke the function that will return a copy of the shipping ships data array and store it in a variable
    const shippingShips = getShippingShips()
    
    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        //Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `<li>${ship.name}</li>`        
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}
