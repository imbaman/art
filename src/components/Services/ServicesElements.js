import styled from 'styled-components'


export const ServicesContainer = styled.div`
height:700px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#fff5d7;

@media screen and (max-width:768px){
    height:1100px;
}

@media screen and (max-width:480px){
height:1300px;
}
`

export const ServicesWrapper = styled.div`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap:20px;
padding:0 50px;

@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr;
}

@media screen and (max-width:768px){
    grid-template-columns:1fr;
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background:#fff;
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 2px rgba(0,0,0,0.3);
transition:all .2s ease-in-out;

&:hover{
    transform:scale(1.05);
    transition:all .2s ease-in-out;
    cursor:pointer;
}
`

export const ServicesIcon = styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`

export const ServicesH1 = styled.h1`
font-size:2.5rem;
padding-bottom:70px;
font-family:'Playfair Display', serif;
@media screen and (max-width:480px){
    font-size:2rem;
}
`

export const ServicesH2 = styled.h2`
font-size:1rem;
padding-bottom:9px;
`

export const ServicesP = styled.p`
font-size:1rem;
text-align:center;
`