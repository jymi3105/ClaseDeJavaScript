import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {

    //Esto es para que la pagina no se refresque por defecto, y asi no borra los datos del input
    e.preventDefault();

    // Guardo los valores de los inputs, en variables
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Create a new Oject Product
    const product = new Product(name, price, year);

    // Esta constante la creo para trabajar con la interfaz, y la constante tendrá unos metodos asociados
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "") {
      //El return es para que el codigo se detenga ahi en el caso de que entre en el if
      return ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Product
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

  //A ese elemento le añado el evento del clic, para que me lo elimine
document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  //Detecto donde he hecho click, para luego eliminarlo
  ui.deleteProduct(e.target);
  e.preventDefault();
});
