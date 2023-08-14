import { Row, Col } from "react-bootstrap"

const Store = () => {
  return (
    <>
        <h1>Welcome to Store</h1>
        <Row xs={1} md={3} classname="g-4">
            <Col align="center">
                <h1>Product</h1>
            </Col>
        </Row>
    </>
  )
}

export default Store