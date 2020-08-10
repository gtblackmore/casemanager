const BASE_URL = "http://localhost:3000"
const ATTORNEY_URL = `${BASE_URL}/attorneys`
const MATTER_URL = `${BASE_URL}/matters`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => {
  fetchAttorneys();
  createAttorneyForm();
  fetchMatter();
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

function createAttorneyForm(){
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
      debugger;
      let a  = new Attorney(attorney)
      a.renderAttorney();
})
  
}

function deleteAttorney() {
  let attorneyId = parseInt(event.target.dataset.id)
  fetch(`${ATTORNEY_URL}/${attorneyId}`, {
      method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
  })
  
}

function fetchMatter() {
  fetch(MATTER_URL)
  .then(resp => resp.json())
  .then(matters => {
    for(const matter of matters) {
      let c = new Matter(matter)
      c.renderMatter();
    } 
  })
}

function createMatterForm(){
  let matterForm = document.getElementById("matter-form")
  let attorneyID = parseInt(event.target.dataset.id)
  matterForm.innerHTML += 
  `
  <form>
      Plaintiff: <input type="text" id="plaintiff"><br>
      Defendant: <input type="text" id="defendant"><br>
      Case Number: <input type="text" id="case_number"><br>
      <input type="hidden" id="attorney_id" value=${attorneyID}>
      <input type="submit" value="Create Matter">
  </form>
  `
 
  matterForm.addEventListener("submit", matterFormSubmission)

}

function matterFormSubmission(){
  event.preventDefault();
  let plaintiff = document.getElementById("plaintiff").value
  let defendant = document.getElementById("defendant").value
  let caseNumber = document.getElementById("case_number").value
  let attorneyID = document.getElementById("attorney_id").value

  let matter = {
      plaintiff: plaintiff,
      defendant: defendant,
      case_number: caseNumber,
      attorney_id: parseInt(attorneyID)

  }

  fetch(MATTER_URL, {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(matter)
  })
  .then(resp => resp.json())
  .then(matter => {
      let m  = new Matter(matter)
      m.renderMatter();
})
  
}

function deleteMatter() {
  let matterId = parseInt(event.target.dataset.id)
  fetch(`${MATTER_URL}/${matterId}`, {
      method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
  })
  
}