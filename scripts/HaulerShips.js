//Import function from database that gets a copy of hauler ships data array
import { getHaulingShips } from "./database.js"

//Export and define the function that is responsible for generating the HTML string for the DOM
export const haulerList = () => {
    //Invoke the function that will return a copy of the hauler ships data array and store it in a variable
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        //Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `<li>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"
    
    return haulersHTML
}
