class Product {
    constructor (name,price,year){
        this.name = name;
        this.price = price;
        this.year = year; 
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('Product-list');
        const element = document.createElement('div');
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

    resetForm(){
       document.getElementById('product-form').reset(); 
    }
    
    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMenssage('product Deleted Successfully', 'info');
        }
    }
    showMenssage(message, csClass){
        const div = document.createElement('div');
        div.className = ` alert alert-${csClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // showing in DOM
       const container = document.querySelector('.container');
       const app = document.querySelector('#app');
       container.insertBefore(div,app);
       setTimeout(function () {
        document.querySelector('.alert').remove();
       }, 3000);
    }
}

// DOM Events

document.getElementById('product-form')
        .addEventListener('submit', function(e){
            e.preventDefault();

 const name = document.getElementById('name').value,
       price = document.getElementById('price').value,
       year = document.getElementById('year').value;

 const product = new Product(name, price, year);

 const ui = new UI();
 if (name === '' || price === '' || year === '') {
  return ui.showMenssage('Complete Fields please', 'danger');
 }
  ui.addProduct(product);
  ui.resetForm();
  ui.showMenssage('Product Added Successfully', 'success');
 
});

document.getElementById('Product-list').addEventListener('click', function(e){
     const ui = new UI();
     ui.deleteProduct(e.target);
});