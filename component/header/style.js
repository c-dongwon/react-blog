import styled, { isStyledComponent } from "styled-components";

export const HeaderWrap = styled.div`
  
`

export const HeaderBar = styled.header`
    position: fixed;
    top: 0;
    left: 380px;
    width: calc(100% - 380px);
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
        width: 60px;
    }
    div{
        position: relative;
        height: 40px;
        width: 340px;
        margin-right: 20px;
        button{
            position: absolute;
            left: 0;
            height:40px;
            top: 0%;
            border:0;
            background-color: transparent;
            svg{
                color:#0000005C;
                width: 14px;
                margin-left: 10px;
            }
        }
        input{
            width: 100%;
            height: 40px;
            background-color: #ECECEC;
            border-radius: 6px;
            border: 0;
            padding-left: 40px;
            font-size:17px;
            color:#979797;
            font-weight: 400;
            &::placeholder{
                color:#979797;
                font-size:17px;
                font-weight: 400;
            }
        }
    }

`
export const LeftMenu = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width:380px;
    border-right: 1px solid #ddd;
    background-color: #F5F5F5;
    padding: 0 40px;
    h1{
        text-align: left;
        color:#000;
        font-size: 25px;
        font-weight: 600;
        padding: 25px 0 25px;
    }
`
export const MenuList = styled.ul`
    width: 100%;
    max-height: 490px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: -1px 3px 8px #0000001A;
    padding: 0 20px;
    margin-bottom: 30px;
    & > li{
        border-bottom: 1px solid #ddd;
        &:last-of-type{
            border-bottom:0;
        }
        & > button, & > a, & > h3{
                background-color: transparent;
                border: 0;
                color: #000;
                font-size:20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0;
                width:100%;
                font-weight: 500;
                transition: 0.2s;
                svg{
                    color:#C4C4C6;
                    width: 15px;
                }
                &:hover{
                    color:#1276E1;
                }
                &.active{
                    color:#1276E1;
                }
            }
        }
        ul{
            height: 0;
            overflow: hidden;
            transition: 0.3s;
            &.active{
                height: auto;
            }
            li{
                a{
                    display: inline-block;
                    margin-bottom: 20px;
                    font-size: 16px;
                    font-weight: 400;
                }
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
    width: 50px;
    height:50px;
    border-radius: 50%;
    border: 1px solid #ddd;
    background-color: #F5F5F5;
    overflow: hidden;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const SwitchBtn = styled.div`
    display: inline-block;
    input {
        position: absolute;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 45px;
    height: 22px;
  
    border-radius: 20px;
    transition: 0.2s;
    box-sizing: border-box;
    background: #666;
    border: 2px solid #666;
    }
    span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transition: 0.2s;
    }

    /* checking style */
    input:checked+label {
    background: #1276E1;
    border: 2px solid #1276E1;
    }
    /* move */
    input:checked+label span {
    left: 23px;
    background: #fff;
    }
`
export const FlexLi = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    & > h3:hover{
        color: #000 !important;;
    }
`