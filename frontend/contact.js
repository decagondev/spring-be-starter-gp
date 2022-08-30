const container = document.querySelector(".wrapper");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


window.onload = function(evt) {
    // const staticContact = {
    //     id: 1,
    //     name: "Tom Tarpey",
    //     email: "tom@tom.com",
    //     address: "321 Hurlingham Road. Birmingham. West Midlands. B44 0PL.",
    //     avatar: "tom.png",
    //     phone_numbers: [
    //         "01214546678",
    //         "07986545678"
    //     ]
    // }
    evt.preventDefault();
    console.log("Getting Contact Data...");
    axios.get("http://localhost:8080/contacts/"+id)
    .then(res => {
      console.log(res);

        populateContact(res.data);
    })
    // populateContact(staticContact);
  }

{/* <div class="contact-card">
<!-- add img tag here-->
<h2>Tom Tarpey</h2>
<p>31 Some Street. Kingstanding. Birmingham. West Midlands. B44 0PL.</p>
<p>tom@decadev.co.uk</p>
<div class="phone-numbers">
    <h2>Phone Numbers</h2>
    <ul>
        <li>07596765432</li>
        <li>01213345654</li>
        <li>01516574567</li>
    </ul>   
</div>
</div> */}
function populateContact(contact) {
    const contactDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");
    const img = document.createElement("img");
    const nameH2 = document.createElement("h2");
    const phoneH2 = document.createElement("h2");
    const phoneText = document.createTextNode("Phone Numbers");
    const linkText = document.createTextNode("Back");
    const nameText = document.createTextNode(contact.name);
    const emailText = document.createTextNode(contact.email);
    const addressText = document.createTextNode(contact.address);
    const emailP = document.createElement("p");
    const addressP = document.createElement("p");
    const ul = document.createElement("ul");
    const backLink = document.createElement("a");
    const phoneNums = [...contact.phone_numbers];

    for (let i = 0; i < phoneNums.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(phoneNums[i]);

        li.appendChild(text);
        ul.appendChild(li);
    }

    phoneH2.appendChild(phoneText);
    phoneDiv.appendChild(ul);

    emailP.appendChild(emailText);
    addressP.appendChild(addressText);
    nameH2.appendChild(nameText);
    backLink.appendChild(linkText);

    img.setAttribute("src", contact.avatar);
    backLink.setAttribute("href", "index.html");
    // styles

    contactDiv.setAttribute("class", "item contact-card");
    img.setAttribute("class", "ui image");
    nameH2.setAttribute("class", "header");
    emailP.setAttribute("class", "description");
    addressP.setAttribute("class", "description");





    contactDiv.appendChild(img);
    contactDiv.appendChild(nameH2);
    contactDiv.appendChild(addressP);
    contactDiv.appendChild(emailP);
    contactDiv.appendChild(phoneDiv);
    contactDiv.appendChild(backLink);

    container.appendChild(contactDiv);

}
