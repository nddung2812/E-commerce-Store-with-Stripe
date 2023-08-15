import { Row, Col } from "react-bootstrap"
import { productsArray } from "../productsStore"
import ProductCard from "../components/ProductCard"
const Store = () => {
  return (
    <>
        <h1 className="p-3">Welcome to Store</h1>
        <Row xs={1} md={3} className="g-4">
          {productsArray.map((product, i) => (
            <Col align="center" key={i}>
                <ProductCard product={product}/>
            </Col>
          ))}
        </Row>
    </>
  )
}

export default Store