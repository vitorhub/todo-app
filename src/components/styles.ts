import styled from 'styled-components' // para styled components

interface IButtonProps {
    toggle: string;
}
interface IContainer{
    change?: boolean;
    linha?: boolean;
}

export const Container = styled.div<IContainer>`
    background-color: ${props => props.change ? 
    "#161722" : 
    "#FFF"
    };
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: ${props => props.change ? 
    "url(/images/bg-desktop-dark.jpg)" : 
    "url(/images/bg-desktop-light.jpg)"
    };
    background-repeat: no-repeat;
    transition: background-image 2s 0s;
    @media (max-width: 430px){
        background-image: ${props => props.change ? 
    "url(/images/bg-mobile-dark.jpg)" : 
    "url(/images/bg-mobile-light.jpg)"
    };
    background-size: 100%;
    }

`

export const TodoList = styled.div`
margin: auto;
margin-top: 100px;
width: 375px;
height: fit-content;
`

export const TituloToggle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h1{
        color: #FFF;
    }
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

export const Entrada = styled.div<IContainer>`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.change ? "#25273C" : "#FFF" };
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
`
export const InputFalse = styled.input<IContainer>`
-webkit-appearance: none;
width: 30px;
height: 30px;
background-color: ${props => props.change ? "#25273C" : "#FFF" };
border-radius: 5px;
vertical-align:middle;
border-radius: 50%;
border: ${props => props.change ? "1px solid #FFF" : "1px solid #25273C" };
`
export const ImputEntrada = styled.input<IContainer>`
    width: 95%;
    padding-left: 10px;
    background-color: ${props => props.change ? "#25273C" : "#FFF" };
    border: none;
    outline: none;
    font-size: 15px;
    color:${props => props.change ? "#FFF": "#25273C" };
    &:focus{
        background-color: ${props => props.change ? "#25273C" : "#FFF" };
        color: ${props => props.change ? "#FFF" : "#25273C" };
    }
`

export const ListaMap = styled.div<IContainer>`
    ul li Label span{
        background-color: ${props => props.change ? "#25273C" : "#FFF" };
        margin-left: 10px;
        align-self: center;
        font-size: 12px;
        color: ${props => props.change ? "#FFF" : "#25273C" };
        cursor: pointer;
    }
`

export const Label = styled.label<IContainer>`
    display: flex;
    padding: 10px;
    background-color: ${props => props.change ? "#25273C":"#FFF"  };
    border-bottom: 1px solid #FFF;
    span{
    width: 80%;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
    text-decoration: ${props => props.linha ? "line-through": ""} ;
   }
`
export const ImputCheck = styled.input<IContainer>`
-webkit-appearance: none;
width: 30px;
height: 30px;
background: ${props => props.change ? "#25273C":"#FFF"  };
border-radius: 5px;
vertical-align:middle;
border-radius: 50%;
border: ${props => props.change ? "1px solid #FFF":"1px solid #25273C"  };
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

export const Estados = styled.div<IContainer>`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${props => props.change ? "#25273C":"#FFF"  };
    button{
        font-size: 12px ;
        color: #777A92;
        background-color: ${props => props.change ? "#25273C":"#FFF"  };
    }
    button:hover{
        cursor: pointer;
        color: ${props => props.change ? "#FFF":"#25273C"  };
    }
`
export const Contador = styled.span<IContainer>`
    color: #777A92;
    font-size: 12px ;
    &:hover{
        cursor: pointer ;
        color: ${props => props.change ? "#FFF":"#25273C"  };
    }
`
    
    