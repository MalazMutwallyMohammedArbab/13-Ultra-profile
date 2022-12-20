import styled from 'styled-components'
export var AboutSection = styled.div `
    height: 500px;
    background: url('images/home-bg.jpg'); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed
`

export var AboutInfo = styled.div `
    padding-top: 100px;
    width: 50%;
    float: right;
`

export const AboutTitle = styled.h2 `
    font-weight: bold;
    font-size: 50px;
    margin: 10px 0
`

export const Span = styled.span `
    font-weight: normal
`

export var InfoDir = styled.h4 `
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px
`

export const InfoDesc = styled.p `
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`

export const Anchor = styled.a `
    text-decoration: none
`

let myMediaQuery = window.matchMedia('(max-width: 991px)');
function widthChangeCallback(myMediaQuery){
    if(myMediaQuery.matches){
      AboutSection = styled.div `
        height: auto;
      `
      AboutInfo = styled.div `
        width: 100%;
        padding-top: 10px;
        float: none
      `
      InfoDir = styled.h4 `
        font-size: 30px
      `
    }
}
myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);