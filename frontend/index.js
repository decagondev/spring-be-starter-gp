const contactForm = document.querySelector("#contact-form");
const contactList = document.querySelector("#contacts");

contactForm.onsubmit = async function(evt) {
  evt.preventDefault();
  const name = document.querySelector("#contactName").value;
  const email = document.querySelector("#contactEmail").value;
  const address = document.querySelector("#contactAddress").value;
  const avatar = document.querySelector("#contactAvatar").value;

  let pns = document.querySelector("#contactNumbers").value;
  pns = pns.split(",");
  for (let i = 0; i < pns.length; i++) {
    pns[i] = pns[i].trim();
  }

  console.log(pns);

  const newContact = {
    "name": name,
    "email": email,
    "address": address,
    "avatar": avatar,
    "phone_numbers": pns
  }
  axios.post("http://localhost:8080/contacts", newContact)
  .then((res) => {
    console.log(res);
    window.location.reload();
  })
}

window.onload = async function(evt) {
  evt.preventDefault();
  console.log("Getting Contact Data...");
  axios.get("http://localhost:8080/contacts/", ).then((res) => {
    console.log(res.data);
    populateContactlists(res.data);
  })
}

function populateContactlists(contactData) {

  for (let contact of contactData) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let text = document.createTextNode(contact.name);

    a.setAttribute('href', `./contact.html?id=${contact.id}`);

    a.appendChild(text);
    li.appendChild(a);
    contactList.appendChild(li);
  }
}