import styled from 'styled-components' // para styled components

interface IButtonProps {
    toggle: string;
}

export const TituloToggle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h1{
        color: #FFF;
    }
`
export const Entrada = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #25273C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
`
export const ImputEntrada = styled.input`
    width: 95%;
    padding-left: 10px;
    background-color: #25273C;
    border: none;
    outline: none;
    font-size: 20px;
`

export const BotaoToggle = styled.div<IButtonProps>`
  background-image: ${props => props.toggle == "sun" ? "url(/images/icon-moon.svg)"
   : "url(/images/icon-sun.svg)" };
  background-color: none;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 1s 0s;
`

export const Container = styled.div`
    background-color: #161722;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    width: 100%;
    height: 100vh;
`
export const TodoList = styled.div`
margin: auto;
margin-top: 100px;
width: 375px;
height: fit-content;
`

export const InputFalse = styled.input`
-webkit-appearance: none;
width: 30px;
height: 30px;
background-color: #25273C;
border-radius: 5px;
vertical-align:middle;
border-radius: 50%;
border: 1px solid #FFF;
`

export const ListaMap = styled.div`
    ul li Label span{
        background-color: #25273C;
        margin-left: 10px;
        align-self: center;
        font-size: 20px;
        color: #FFF;
    }
    `
export const Label = styled.label`
    display: flex;
    padding: 10px;
    background-color: #25273C;
    border-bottom: 1px solid #FFF;
    span{
    width: 80%;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
   }
`
export const ImputCheck = styled.input`
-webkit-appearance: none;
width: 30px;
height: 30px;
background: #25273C;
border-radius: 5px;
vertical-align:middle;
border-radius: 50%;
border: 1px solid #FFF;
&:checked {
        background-image: url('/images/icon-check.svg'), linear-gradient(to right, rgba(94, 212, 254, 1), rgba(184, 97, 244, 1) );
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
        border: none;
   };
   
`
export const Cross = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: auto;
    &:hover{
        background-image: url("/images/icon-cross.svg");
        mask-repeat: no-repeat;
        background-size: cover;
    }    
`

export const Estados = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #25273C;
    button{
        font-size: 12px ;
        color: #777A92;
        background-color: #25273C;
    }
    button:hover{
        cursor: pointer;
        color: #FFF;
    }
`
export const Contador = styled.span`
    color: #777A92;
    font-size: 12px ;
    &:hover{
        cursor: pointer ;
        color: #FFF;
    }
`
    
    