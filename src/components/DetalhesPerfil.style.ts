import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DetalhesStyle = styled.div`

  min-height: 130px;

  margin: 0 auto;
  max-width: 700px;

  border: 1px solid rgba(197, 197, 197, 1);
  border-width: 0px 1px 1px 1px;

  img {

padding: 0 0 0 35px ;

margin-bottom: 122px;
max-width: 100px;
max-height: 70px;

}

  h1 {

font-family: 'Questrial';
font-style: normal;
font-weight: 400;
font-size: 36px;

padding-top: 43px;
padding-bottom: 35px;
margin-left: 20px;


line-height: 20px;

color: #76BB4C;

}

p {

color: #000000;
  
line-height: 20px;
  
margin-left: 20px;

font-family: 'Questrial';
font-weight: 400;
font-size: 18px;
}

  a {

    font-weight: 500;
    font-size: 18px;

    text-decoration:none;
      
 

    line-height: 16px;

    color: #76BB4C;

  }

`
export const EditarPerfil = styled(Link)`

  p {

    padding: 10px 20px;
    
    background: #76BB4C;
    
    margin-top: 28px;
    margin-right: 4.1rem;
    
    color: #FFFFFF;
    
    border-radius: 32px;

    text-transform: lowercase;

  }

`

export const Dados = styled.div`

  pre {

    font-size: 18px;
    font-weight: 400;
    font-family: 'Questrial';

    color: #6033AA;

    display: inline;


    line-height: 18px;

  }
`
