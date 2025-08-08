import { dockList } from "./docks.js"
import { haulerList } from "./haulerShips.js"
import { shippingShipsList } from "./shippingShips.js"

const mainContainer = document.querySelector("#container")

const shippingShipShipsHTML = `
<h1>Shipping Ship Ships</h1>
<section class="docks">
    <h2 class="docks_header">Docks</h2>
        ${dockList()}
</section>
<section class="hauler_ships">
    <h2 class="hauler_ships_header">Haulers</h2>
        ${haulerList()}
</section>
<section class="shipping_ships">
    <h2 class="shipping_ships_header">Shipping Ships</h2>
        ${shippingShipsList()}
</section>
`

mainContainer.innerHTML = shippingShipShipsHTML