import styled from 'styled-components'
import { Link } from 'react-router-dom'

export var NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export var Logo = styled.div `
    width: 50%;
    float: left;
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`

export var UlList = styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
`

export var ListItem = styled.li `
    display: inline-block;
`

export const Anchor = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: #eb5424
    }
`

export const LinkAnchor = styled(Link) `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
` 

/* Media for Navbar Style */ 

let myMediaQuery = window.matchMedia('(max-width: 991px)');
function widthChangeCallback(myMediaQuery){
    if(myMediaQuery.matches){
      Logo = styled.div `
        width: 100%;
        float: none;
      `
      UlList = styled.ul `
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none
      `
      ListItem = styled.li `
        display: block;
        text-align: center;
      `
    }
}
myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);


/*@media (min-width : 992px) {
    .navbar label {
        display: none
    }
} */
