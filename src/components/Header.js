import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { selectAllCart } from "../features/cart/cartSlice";

const Header = () => {
  const cart = useSelector(selectAllCart);
  let totalCartItems = 0;
  const itemsInCart = () => {
    if (cart === undefined) {
      return "0";
    } else {
      let i = 0;
      cart.map((item, i) => {
        totalCartItems += cart[i].quanity;
        return totalCartItems;
      });
      return totalCartItems;
    }
  };
  return (
    <>
      <Navbar
        className="navBar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <h1 className="header">FakeStore</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/items">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <BsCart3></BsCart3>
                  {itemsInCart()}
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
