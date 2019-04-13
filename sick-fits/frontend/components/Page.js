import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};;

`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
    background: #eee;
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('./static/ranikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
    }

    a {
        text-decoration: none;
        color: ${theme.black}
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;

// This is going to be the standard layout for all of the pages
// These the components that need to be rendered in every page should
// be imported here.

//Note about styled components
// import styled from 'styled-components';

// Tag template literal
// You could target elements, classes, and ids for its nested elements too
// You could write js as well if you want.
// const MyButton = styled.button`
//     background: red;
//     font-size: ${props => props.huge ? '100px' : '50px'};
//     span {
//         font-size: 50px;
//     }
//     .poop:hover {
//     }
// `;

// <MyButton huge>
// Click Here 
// <span class="poop">💩</span>
// </MyButton>
// <MyButton>
// Click Here 
// <span class="poop">💩</span>
// </MyButton>

// Styled components, if they are not going to be reused might as well just put them in the same file.
// Nextjs does not render styled components so you will see that when you refresh the page you will loose all of the css
// When you visit a page, it will render it on the server and then render it on the client.
// Nextjs takes care of that 
// Getinitialprops, and custom documents help you modify the initial server side render.