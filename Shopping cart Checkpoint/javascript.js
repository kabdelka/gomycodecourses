// Slection 
let itemMinus = document.querySelectorAll('.minus-item');
let itemPlus = document.querySelectorAll('.plus-item');
let itemQuantity = document.querySelectorAll('.quantity-item');
let itemPrice = document.querySelectorAll('.price-item');
let itemLike = document.querySelectorAll('.like-item');
let itemDelete = document.querySelectorAll('.delete-item');
let total = document.querySelector('.total-total');
let item = document.querySelectorAll('.item');
let subTotal = document.querySelector('.total-subtotal');
updateTotal();

//  quantity-item  and like button


for (let i = 0; i < itemMinus.length; i++) {
	itemMinus[i].addEventListener('click', () => {
		if (itemQuantity[i].value > 1) {
			itemQuantity[i].value--
			updateTotal();
		}
		
	})
	itemPlus[i].addEventListener('click', () => {
		++itemQuantity[i].value;
		updateTotal();
	})

	itemLike[i].addEventListener('click', () => {
		if (itemLike[i].style.color === 'red') {
			itemLike[i].style.color = 'black'
		}
		else
		{itemLike[i].style.color = 'red';}
		
	})
	
}


// Calculate Price total

function updateTotal () {
	let priceTotal = 0;
	let subsub = 0;
	for (let i = 0 ; i < itemQuantity.length; i++) {
		subsub += itemQuantity[i].value * parseInt(itemPrice[i].value);
		priceTotal += itemQuantity[i].value * parseInt(itemPrice[i].value) + 49;
		
	}
	subTotal.innerHTML = `$ ${subsub}`;
	total.innerHTML = ` $ ${priceTotal} `;
	} 

for (let i = 0; i<itemDelete.length; i++) {
	itemDelete[i].addEventListener('click', () => {
		item[i].style.display = 'none'
		itemQuantity[i].value = 0;
		updateTotal();
	})

}