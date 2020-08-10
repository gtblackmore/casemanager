const BASE_URL = "http://localhost:3000"
const ATTORNEY_URL = `${BASE_URL}/attorneys`
const CASE_URL = `${BASE_URL}/cases`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => {
  fetchAttorneys();
})


function fetchAttorneys() {
  fetch(ATTORNEY_URL)
  .then(resp => resp.json())
  .then(attorneys => {
    for(const attorney of attorneys) {
      let a = new Attorney(attorney)
    }
  })
}
