import styled from 'styled-components'

export const Container=styled.div`
background-color: #f2f2f2;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
margin-top: 20px;
`
export const SubscriberUsageContainer = styled.div`
background-color: white;
padding-top: 30px;
padding-bottom: 30px;
padding-left: 50px;
padding-right: 50px;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 

`

export const Title=styled.label`
font-size: 18px;
font-weight: 800;
padding-bottom: 20px;
`
export const UsageCards=styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 2rem;
grid-template-rows: 300px;

`

export const UsageCard=styled.div`
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 
        background-color: #fcfbfb;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export const Bar =styled.div`
width: 130px;
height: 130px;
border-radius: 50%;
background-color: white;
display: flex;
flex-wrap: wrap;

`

export const ProgressTitle = styled.label`
margin-top: 20px;
font-weight: 800;
font-size: 18px;
`
export const ProgressSubtitle=styled.label`
font-weight: 700;
font-size: 14px;
`

export const TransactionValue=styled.label`
font-weight: 800;
`
export const CircularContainer=styled.div``

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