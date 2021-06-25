import styled from 'styled-components'

export const Container =styled.div`
height: 100vh;
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 500px;
padding: 2rem;
grid-column-gap: 2rem;

` 

export const OrdererReasons =styled.div`
    -webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`
export const BiderReasons =styled.div`
    -webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`

export const Loader = styled.div`
display: flex;
align-items:center;
justify-content: center;
margin-top: 50px;
`