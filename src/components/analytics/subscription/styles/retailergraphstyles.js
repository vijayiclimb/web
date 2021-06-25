import styled from 'styled-components'

export const Container=styled.div`
background-color: white;
padding: 50px;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;                         

`
export const Title=styled.label`
font-size: 18px;
font-weight: 800;

`
export const GraphContainer=styled.div`
background-color: #f2f2f2;
display: flex;
padding: 30px;
padding-left: 60px;
padding-right: 60px;
margin-top: 20px;

`
export const Graph=styled.div`
flex-grow: 1;

background-color: white;
padding: 20px;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 


@media screen and  (max-width: 400px){
        flex-basis: 30%;
}
`