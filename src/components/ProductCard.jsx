import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = (product) => {
    const singleProduct = product.product;
    console.log(singleProduct)
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(singleProduct.id)
    console.log(productQuantity)
    console.log("here", cart.items)
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {singleProduct.title}
                </Card.Title>
                <Card.Text>
                    ${singleProduct.price}
                </Card.Text>
                { productQuantity > 0 ? 
                <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">In Cart: {productQuantity} </Form.Label>
                        <Col sm="6">
                            <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(singleProduct.id)}>+</Button>
                            <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(singleProduct.id)}>-</Button>
                        </Col>
                    </Form>
                    <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(singleProduct.id)}>Remove from cart</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(singleProduct.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard