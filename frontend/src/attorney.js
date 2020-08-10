class Attorney{
  constructor(attorneyObj) {
    this.id = attorneyObj.id;
    this.firstName = attorneyObj.first_name;
    this.lastName = attorneyObj.last_name;
    this.email = attorneyObj.email
  }

  renderAttorney() {
    let attorneyDiv = document.getElementById("attorney-container")
    attorneyDiv.innerHTML +=
      `
        <ul>
        <h3> ${this.firstName} ${this.lastName} </h3>
        <li> Cases: </li>
        <ul>
      `
  }
}