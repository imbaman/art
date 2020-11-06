import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius:5px;
background:${({primary}) =>  (primary ? '#ffaaab' : '#ff5e6c')};
padding:${({big}) => (big ? '14px 48px' : '12px 30px')};
color:${({dark}) =>(dark ? '#734046' : '#fff')};
font-size:${({big})=>(big ? '20px' : '16px')};
border:none;
cursor:pointer;
outline:none;
display:flex;
justify-content:center;
align-items:center;
transition: all .2s ease-in-out;

&:hover{
    transition: all .2s ease-in-out;
    background:${({primary}) =>  (primary ? '#ff5e6c' : '#ffaaab' )};
}
`