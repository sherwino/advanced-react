import Router from 'next/router';
import Nprogess from 'nprogress';
import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
    console.log('Route Change Start triggered')
    Nprogess.start();
}
Router.onRouteChangeComplete = () => {
    console.log('Router Change Complete triggered')
    NProgress.done();
}
Router.onRouteChangeError = () => {
    console.log('Route Change Error triggered')
    NProgress.done();
}

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }

    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.lightgrey};
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/"><a>Sick Fits</a></Link>
            </Logo>
            <Nav />
        </div>

        <div className="sub-bar">
            Search
        </div>

        <div className="cart">
            Cart
        </div>
    </StyledHeader>
);

export default Header;

// the media query would only apply to teh Logo styled element in this case
// You could do the traditional thing of embedding an element inside query too