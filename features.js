document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Recopilación de datos del formulario
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var age = document.getElementById("Age").value;
    var description = document.querySelector(".form-select").value;
    var suggestions = document.getElementById("suggestions").value;

    var recommend = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    );
    var languages = [];
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    checkboxes.forEach(function (checkbox) {
      languages.push(checkbox.value);
    });

    // Validación de los campos del formulario
    if (
      name &&
      email &&
      age &&
      description !== "Which best option describes you?" &&
      recommend &&
      languages.length > 0
    ) {
      // Impresión de los datos en la consola
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Age:", age);
      console.log("Description:", description);
      console.log("Recommend:", recommend.id);
      console.log("Languages:", languages);
      console.log("Suggestions", suggestions);

      // Aquí puedes agregar la lógica para enviar los datos del formulario, por ejemplo:
      // alert('Formulario enviado con éxito');
    } else {
      alert("Por favor completa todos los campos");
    }
  });
});
