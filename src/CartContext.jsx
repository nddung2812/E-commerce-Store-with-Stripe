import { createContext, useState } from "react"
import { productsArray, getProductData } from "./productsStore"

export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart:() => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts, 
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product
                )
            )
        }
    }

    const deleteFromCart = (id) => {
        //[] if an object meets a condition, add the object to array
        // In this case if add all the product except the product with id = id parameter
        setCartProducts(
            cartProducts => cartProducts.filter( currentProduct => {
                return currentProduct.id != id
            })
        )
    }

    const removeOneFromCart = (id) => {
        const quantity = getProductQuantity(id);
        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                )
            )
        }
    }

    const getTotalCost = () => {
      let totalCost = 0;
      cartProducts.map((cartItem) => {
        const productData = getProductData(cartItem.id);
        totalCost += (productData.price * cartItem.quantity)
      })
      return totalCost;
    }

    const contextValue = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;