//Import function from database that gets a copy of docks data array
import { getDocks, getHaulingShips } from "./database.js"

//Export and define the function that is responsible for generating the HTML string for the DOM
export const dockList = () => {
    //Invoke the function that will return a copy of the docks data array and store it in a variable
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        //Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="dock"
                          data-id="${dock.id}"
                          data-location="${dock.location}"
                          >${dock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //Was the dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            //Get the id of the dock that was clicked on
            const dockId = itemClicked.dataset.id
            let foundAMatch = false
            let dockAlertMessage = `${itemClicked.dataset.location} dock is currently unloading `

            const haulers = getHaulingShips()
            //Iterate all of the hauling ships
            for (const hauler of haulers) {
                //Does the dockId foreign key match the dock id
                if (parseInt(dockId) === hauler.dockId) {
                    //Are there multiple hauling ships in the dock? one? none?
                    dockAlertMessage += `${hauler.name} `
                    foundAMatch = true  
                } 
                
            }
            //Should say nothing when none of the hauler dockIds match the dock id of the item clicked
            if (!foundAMatch) { 
                dockAlertMessage += "nothing."}
            window.alert(`${dockAlertMessage}`)
    
            //Window alert showing the users the haulers being serviced by the dock that was clicked on
            
        }
        




    }
)