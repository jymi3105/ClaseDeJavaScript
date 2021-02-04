// UI Constructor
export class UI {
  // Add a new Product
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    //las tildes que hay al principio y al final, nos permite escribir un String en multiples lineas
    //Y el simbolo de dolar es para poder meter variables dentro del string
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  //Esto lo hago para que una vez que doy al submit, vacio los inputs
  //Luego lo tendre que llamar desde el js principal
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    //si donde he hecho click tiene ese atributo y se llama delete, borro al padre del padre del elemento
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // me borrara todos los elementos que empiecen la clase por alert despues de 3 segundos
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
