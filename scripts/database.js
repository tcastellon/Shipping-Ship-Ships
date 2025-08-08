//Create database the contains data on shipping ships, hauler ships, and docks 
const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Ever Given", dockId: Math.floor(Math.random() * 4) + 1 },
        { id: 2, name: "MSC Gülsün", dockId: Math.floor(Math.random() * 4) + 1 },
        { id: 3, name: "Harmony of the Seas", dockId: Math.floor(Math.random() * 4) + 1 },
        { id: 4, name: "Knock Nevis", dockId: Math.floor(Math.random() * 4) + 1 },
        { id: 5, name: "OOCL Hong Kong", dockId: Math.floor(Math.random() * 4) + 1 }
    ],
    shippingShips: [
        { id: 1, name: "Atlantic Explorer", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 2, name: "Pacific Voyager", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 3, name: "Mediterranean Star", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 4, name: "Arctic Thunder", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 5, name: "Caribbean Dream", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 6, name: "Baltic Princess", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 7, name: "Indian Ocean", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 8, name: "North Sea Giant", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 9, name: "Red Sea Runner", haulerId: Math.floor(Math.random() * 5) + 1 },
        { id: 10, name: "Coral Bay Express", haulerId: Math.floor(Math.random() * 5) + 1 }
    ]
}

//Define and export function that returns a copy of the data array
export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulingShips = () => {
    return structuredClone(database.haulers)
}

export const getShippingShips = () => {
    return structuredClone(database.shippingShips)
}