import styled from "styled-components";

export const HeaderWrap = styled.div`
    &.dark{
        header, nav{
            border-color: #555;
            svg{
                color:#fff;
            }
        }
        a{
            
            color:#fff;
        }
    }
`

export const HeaderBar = styled.header`
    position: fixed;
    top: 0;
    left: 300px;
    width: calc(100% - 300px);
    right: 0;
    height: 80px;
    border-bottom: 1px solid #ddd;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding:0 30px;
    box-sizing: border-box;
    img{
        max-height: calc(100% - 1px);
        position: absolute;
        left: 0;
        top: 50%;
        transition: 0.7s;
        transform: translateY(-50%);
        &.h50{
            height: 50px;
        }
    }

`
export const LeftMenu = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width:300px;
    border-right: 1px solid #ddd;
    h1{
        position: relative;
        z-index: 1;
        font-size: 25px;
        font-weight: 600;
        color:#555;
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            display: inline-block;
            text-decoration: none;
            color:#555;
            transition: 0.7s;
        }
    }
`
export const DarkBtn = styled.button`
    border: 0;
    background-color: transparent;
    margin-right: 5px;
    cursor: pointer;
    vertical-align: middle;
    svg{
        vertical-align: middle;
        color:#333;
        width: 30px;
        height: 30px;
    }
`
export const UserBtn = styled.button`
  border: 0;
    background-color: transparent;
    cursor: pointer;
    vertical-align: middle;
    svg{
        vertical-align: middle;
        color:#333;
        width: 30px;
        height: 30px;
    }
`