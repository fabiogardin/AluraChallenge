import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
}
:root{
    font-size: 16px;

    @media (min-width: 768px){
        font-size: 18px;
    }
}

`;