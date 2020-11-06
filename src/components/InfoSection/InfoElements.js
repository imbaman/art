import styled from 'styled-components'

export const InfoContainer = styled.div`
background:${({lightBg}) => (lightBg ? '#fdfdfd' : '#fff5d7')};

@media screen and (max-width:768px){
    padding:50px 0 ;
}
`

export const InfoWrapper = styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin:0px auto;
padding: 50px 24px;
justify-content:center;
`

export const InfoRow = styled.div`

display:grid;
grid-auto-columns:minmax(auto, 1fr);
padding:120px 0;
grid-template-areas:${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px){
    padding: 20px 0;
    grid-template-areas:${({imgStart})=> (imgStart ? `'col1 col1''col2 col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const Column2 = styled.div`
align-self:start;
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
/* padding-bottom:60px; */
`

export const TopLine = styled.p`
font-size:16px;
line-height:16px;
letter-spacing:1.4px;
margin-bottom:16px;
`

export const Heading = styled.h1`
font-family: 'Playfair Display', serif;
margin-bottom:15px;
font-size:90px;
line-height:1.1;


@media screen and (max-width:480px) { 
    font-size:60px;
}
`

export const Subtitle = styled.p`
line-height:140%;
max-width:440px;
margin-bottom:30px;
`

export const Social = styled.p`
margin-top:60px;
`
export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;
`

export const ImgWrap = styled.div`
max-width : 555px;
height : 100%;
`

export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
`