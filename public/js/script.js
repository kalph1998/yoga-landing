const checkBoxHandler = () => {
  const checkbox = document.getElementById("navi-toggle");
  const t = (checkbox.checked = !checkbox.checked);
  return t;
};

//adding form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const details = {
    name: form.name.value,
    Email: form.email.value,
  };
  db.collection("form")
    .add(details)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
