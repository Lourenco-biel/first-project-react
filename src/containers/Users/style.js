import styled from 'styled-components'
import Backgroud1 from '../../Assets/backgrooud1.svg'


export const Container = styled.div`
    background: url("${Backgroud1}");
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;  
    height: 100%;
    min-height: 100vh;
`
export const Image = styled.img`
    margin-top: 30px;
`
export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    backdrop-filter: blur(45px);

`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;
    color: #FFFFFF;
`


export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 132px;

    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img{
        transform: rotatey(180deg);
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 23px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    border: none;
    outline: none;

    width: 342px;
    height: 58px;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;

        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
    }
`
