import styled from 'styled-components' // para styled components


export const ImputCheck = styled.input`
-webkit-appearance: none;
width: 30px;
height: 30px;
background: white;
border-radius: 5px;
border: 2px solid #555;
vertical-align:middle;
border-radius: 50%;
border: none;
&:checked {
        background-image: url('/images/icon-check.svg'), linear-gradient(to right, rgba(94, 212, 254, 1), rgba(184, 97, 244, 1) );
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        border: none;
   }
`

export const Label = styled.label`
    display: flex;
`
export const Cross = styled.div`
    width: 20px;
    height: 20px;
    background-color: black;
    &:hover{
        background-image: url("/images/icon-cross.svg");
    }    

`;

