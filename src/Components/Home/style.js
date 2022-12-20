import styled from 'styled-components'

export const HomeSection = styled.div `
    height: 500px;
    background: url('images/home-bg.jpg'); 
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const HomeInformation = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`

export var HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media(){

    }
`

export var HomeInfo = styled.h4 `
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`

export var HomeDesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`

export const Span = styled.span `
    color: #000
`

export const Btn = styled.button `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
    &:hover{
        background: #fff;
        color: #eb5424
    }
`

let myMediaQuery = window.matchMedia('(max-width: 768px)');
function widthChangeCallback(myMediaQuery){
    if(myMediaQuery.matches){
      HomeTitle = styled.h2 `
        font-size: 40px;
        color: #fff
      `
      HomeInfo = styled.h4 `
        font-size: 20px
      `
      HomeDesc = styled.p `
        font-size: 15px
      `
    }
}
myMediaQuery.addEventListener('change', widthChangeCallback);
widthChangeCallback(myMediaQuery);


/*@media (max-width:575px) {
    .home .home-information .home-title {
        font-size: 30px;
    }
} */