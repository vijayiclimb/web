import styled from 'styled-components'

export const Container =styled.div`
margin-top: 10px;
height: 30vh;
width: 100%;
background-color:#f2f2f2;

`
export const CurrentCountSection=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-column-gap: 20px;
grid-template-rows:1fr;
padding: 1rem;
`



export const Card=styled.div`
background-color: white;
height: 13vh;
display: flex;
border: 2px solid #053E5E;
flex-direction:column;
justify-content: center;
align-items: center;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`
export const CardCount=styled.label`
font-size: 32px;
font-weight: 800;
color: #053E5E;
`

export const CardTitle=styled.label`
font-weight: 700;
font-size: 16px;
`


export const CountSection=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-column-gap: 20px;
grid-template-rows:1fr;
padding: 1rem;
padding-top: 0;
`

export const CardDate=styled.div`
background-color: white;
height: 10vh;
display: flex;
flex-direction: row;
padding: 0.5rem;
align-items: center;
justify-content: flex-end;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`

export const CardIncrease=styled.div`
background-color: white;
height: 10vh;
display: flex;
padding: 0.5rem;
align-items: center;
justify-content: center;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`

export const CardTotal=styled.div`
background-color: white;
height: 10vh;
display: flex;
padding: 0.5rem;
align-items: center;
justify-content: center;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);  
`
export const CountSectionCard=styled.div`

display: flex;
flex-direction: column;

`

export const CardTotalValue=styled.label`
font-size: 30px;
font-weight: 800;
color: #053E5E;
margin-bottom: -10px;
margin-left: 10px;
`

export const CardTotalTitle=styled.label``

export const CardIcon=styled.div`
width: 35px;
height: 35px;
background-color: red;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
margin-top: -10px;
`

export const CardIcon2=styled.div`
margin-top: -10px;
width: 35px;
height: 35px;
background-color:#053E5E;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
`
export const CardContainer=styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;
`

export const DateTitle=styled.label`
margin:auto;

`

export const DateValue=styled.div`
color: red;
font-size: 25px;
font-weight: 400;
`