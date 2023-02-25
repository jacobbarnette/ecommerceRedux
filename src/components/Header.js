import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillCartFill } from "react-icons/bs";
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
        className="py-0 navBar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <h1 className="header">FakeStore</h1>
          </Navbar.Brand>
          <Nav className="">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="response-navbar-nav">
              <Nav
                className="navContainer justify-content-end"
                activeKey="/home"
              >
                <Nav.Item>
                  <LinkContainer to="/">
                    <Nav.Link className="navItems">Home</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/items">
                    <Nav.Link className="navItems">Products</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/contact">
                    <Nav.Link className="navItems">Contact</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/cart">
                    <Nav.Link className="navItems cartIcon">
                      <BsFillCartFill></BsFillCartFill>
                      {itemsInCart()}
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
