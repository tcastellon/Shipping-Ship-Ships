//Import function from database that gets a copy of docks data array
import { getDocks } from "./database.js"


//Export, define, and invoke the function that will return a copy of the docks data array
export const DockList = () => {
    //Define the function that is responsible for generating the HTML string for the DOM
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li>${dock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
