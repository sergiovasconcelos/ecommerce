import { createGlobalStyle } from 'style-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #D8FCFE;
    -webkit-front-smoothing: antialiased; 
}

body, input, button{
    font: 14px roboto, sans-serif;
}

#root{
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 50px;
}

button{
    cursor: pointer;
}

`;