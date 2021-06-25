import styled from 'styled-components'

export const Container = styled.div`
padding: 15px;
background-color: white;
-webkit-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75);
        box-shadow: 0px 4px 8px -4px rgba(0,0,0,0.75); 
margin-top: 20px;
margin-left: 20px;
margin-right: 15px;
display: flex;
flex-direction: column;

`

export const Table=styled.div`
padding: 10px;
flex: 2.5;
`

export const User=styled.div`
padding: 10px;
flex: 1;
`

export const Title=styled.label`
font-weight: 800;
font-size: 20px;
`

export const SubTitle=styled.label`
color: red;
font-weight: 800;
font-size: 20px;
`

export const TitleContainer=styled.div`
display: flex;
flex-direction: column;
`


export const DetailContainer=styled.div`

display: flex;
`

export const Button=styled.button`
border: 2px solid red;
padding: 5px 10px 5px 10px;
color: red;
background-color: white;
border-radius: 0.35rem;

&:hover{
        color: white;
        background-color: red;
}
`