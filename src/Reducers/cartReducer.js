export const cartInitialState = {
    'elements': [],
    'subTotal': 0
};

export function cartReducer(state, action) {

    const { type, payload } = action;

    const newCart = structuredClone(state);
    let indexCart = newCart.elements.findIndex(item => item.id == payload.id);

    const calculateSubTotal = () => {
        const subTotal = newCart.elements.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
        newCart[`subTotal`] = Number.parseFloat(subTotal).toFixed(2);
    }

    switch (type) {

        case 'ADD_TO_CART':
            indexCart = newCart.elements.findIndex(item => item.id == `cart${payload.id}`);

            if (indexCart >= 0) {
                newCart.elements[indexCart].quantity += 1
            } else {
                newCart.elements.push({
                    id: `cart${payload.id}`,
                    productName: payload.title,
                    price: payload.price,
                    image: payload.images[0],
                    quantity: 1,
                });
            }
            calculateSubTotal();
            return newCart;

        case 'INCREASE_QUANTITY_ITEM':

            if (indexCart >= 0) {
                newCart.elements[indexCart].quantity += 1;
            }
            calculateSubTotal();

            return newCart;

        case 'DECREASE_QUANTITY_ITEM':

            if (indexCart >= 0) {
                if (newCart.elements[indexCart].quantity > 1) {
                    newCart.elements[indexCart].quantity -= 1
                }
            }
            calculateSubTotal();

            return newCart;

        case 'REMOVE_ITEM_FROM_CART':
            const newElements = newCart.elements.filter(item => item.id !== payload.id);
            newCart[`elements`] = newElements;
            calculateSubTotal();

            return newCart;


        case 'CLEAN__CART': return cartInitialState;

    }

    return cartInitialState;

}