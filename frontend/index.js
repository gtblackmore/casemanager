const BASE_URL = "http://localhost:3000"
const ATTORNEY_URL = `${BASE_URL}/attorneys`
const CASE_URL = `${BASE_URL}/cases`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => {
  fetchAttorneys();
  createForm();
})


function fetchAttorneys() {
  fetch(ATTORNEY_URL)
  .then(resp => resp.json())
  .then(attorneys => {
    for(const attorney of attorneys) {
      
      let a = new Attorney(attorney)

      a.renderAttorney();
    }
  })
}

function createForm(){
  let attorneysForm = document.getElementById("attorneys-form")

  attorneysForm.innerHTML += 
  `
  <form>
      First Name: <input type="text" id="first_name"><br>
      Last Name: <input type="text" id="last_name"><br>
      Email: <input type="text" id="email"><br>
      <input type="submit" value="Create Attorney">
  </form>
  `
  attorneysForm.addEventListener("submit", attorneyFormSubmission)

}

function attorneyFormSubmission(){
  event.preventDefault();
  let firstName = document.getElementById("first_name").value
  let lastName = document.getElementById("last_name").value
  let email = document.getElementById("email").value

  let attorney = {
      first_name: firstName,
      last_name: lastName,
      email: email
  }

  fetch(ATTORNEY_URL, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(attorney)
  })
  .then(resp => resp.json())
  .then(attorney => {
      let a  = new Attorney(attorney)
      a.renderAttorney();
})
  
}
 