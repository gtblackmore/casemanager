class Matter{
  constructor(caseObj) {
    this.id = caseObj.id
    this.plaintiff = caseObj.plaintiff;
    this.defendant = caseObj.defendant;
    this.caseNumber = caseObj.case_number;
    this.attorneyID = caseObj.attorney_id
  }
  renderMatter() {
    let matterDiv = document.getElementById("matter-detail")
    matterDiv.innerHTML +=
      `
        <ul data-id="${this.id}">
        <h3> ${this.plaintiff}  v. ${this.defendant} </h3>
        <li> Case Number: ${this.caseNumber} <br>
        </li>
        <button class="delete-bttn" data-id=${this.id} onclick="deleteMatter()">Delete Matter</button>
        <ul>
      `

  }
}