var cart = [];

function addItem() {
  var name = document.getElementById('name').value;
  var description=document.getElementById('description').value;
  var price = parseFloat(document.getElementById('price').value);
  var image = document.getElementById('image').files[0];

  if (name && price && image && description) {
    var item = {
      name: name,
      description:description,
      price: price,
      image: URL.createObjectURL(image)
    };
    cart.push(item);
    updateCart();
    clearFields();
  }
}


function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }


function updateCart() {
  var cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;

    var itemElement = document.createElement('div');
    itemElement.className = 'item';

    var imageElement = document.createElement('img');
    imageElement.src = item.image;
    itemElement.appendChild(imageElement);

    var infoElement = document.createElement('span');
    infoElement.innerHTML = '<center><span><br>' + item.name + '</span><span><br>'+item.description+'</span><span><br>Rs' + item.price.toFixed(2) + '</span></center>';
    itemElement.appendChild(infoElement);

    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (function(index) 
    {
        return function() 
        {
            removeItem(index);
        };
    })(i));
    itemElement.appendChild(removeButton);



    cartContainer.appendChild(itemElement);
  }

  var totalElement = document.createElement('div');
  totalElement.className = 'total';
  totalElement.textContent = 'Total: Rs' + total.toFixed(2);
  cartContainer.appendChild(totalElement);
}

function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
  document.getElementById('image').value = '';
}