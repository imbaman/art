import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
min-height:700px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background:#fff5d7;
`

export const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:400px){
    height:80%
}
`
export const Icon = styled(Link)`
position:fixed;
top:0;

margin-left:30px;
margin-top:100px;
text-decoration:none;
color:#ff5e6c;
font-size:40px;
font-weight:bold;

@media screen and (max-width:480px){
    margin-left:16px;
    margin-top:8px;
}
`

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480px){
    padding:10px;
}
`
export const Form = styled.form`
background:#734046;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:80px 32px;
border-radius:2px;

@media screen and (max-width:400px){
    padding: 32px 32px;
}

`

export const FormH1 = styled.h1`
margin-bottom:40px;
font-family: 'Playfair Display',serif;
letter-spacing:5px;
color:#fff;
font-size:20px;
text-align:center;
`

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:25px;
color:#fff;



`
export const FormInput = styled.input`
padding:15px;
margin-bottom:32px;
border:none;
border-radius:2px;
&:focus{
   outline-color:#ffaaab;
}
`

export const FormButton = styled.button`
padding:16px;
background-color:#ffaaab;
border-radius:5px;
`

export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`




