import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Container, Home, Cart } from './styles';


const Header = () => (
    <Container>
        <Home to="/">
            <div>
                <FiShoppingBag size={80} color="#f8f8f2" />
                <h1>Ecommerce</h1>
            </div>
        </Home>
    </Container>
);

export default Header;