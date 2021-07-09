import { wgs84togcj02 } from "../dist/gps-convert.es"


document.querySelector("#app").innerHTML =
    wgs84togcj02([117.198562, 31.838698]).toString()
