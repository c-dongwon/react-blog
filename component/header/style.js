import styled, { isStyledComponent } from "styled-components";

export const HeaderWrap = styled.div`


`
export const MyInfo = styled.button`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.colors.wrapColor};
    border-radius: 10px;
    box-shadow: 0px 0 5px 0px ${props => props.theme.colors.shadowColor};
    padding: 0 20px;
    margin-bottom: 30px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
        h3{
            color:#1276E1;
        }
    }
    h3{
        font-weight: 500;
        font-size: 16px;
      color:${props => props.theme.colors.mainTxtColor};
    }
    p{
        font-size: 13px;
        padding-top: 5px;
        font-weight: 300;
      color:${props => props.theme.colors.mainTxtColor};
    }
    .imgWrap{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: #555;
        margin-right: 10px;
        overflow: hidden;
        position: relative;
        img{
            max-width:100%;
          max-height: 100%;
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%, -50%);
        }
    }
    .infoWrap{
        text-align: left;
        width: 65%;
    }
    svg{
        color:${props => props.theme.colors.svgColor}
    }

`
export const SearchWrap = styled.div`
    position: relative;
    height: 30px;
    width: 100%;
    margin-bottom: 20px;
       input{
            width: 100%;
            height: 30px;
            background-color: ${props => props.theme.colors.searchInputColor};
            border-radius: 6px;
            border: 0;
            padding-left: 40px;
            font-size:17px;
            color:#979797;
            font-weight: 300;
            &::placeholder{
                color:#979797;
                font-size:17px;
                font-weight: 300;
            }
        }
    button{
        position: absolute;
        left: 0;
        height:30px;
        top: 0%;
        border:0;
        background-color: transparent;
        svg{
            color:${props => props.theme.colors.searchIconColor};
            width: 14px;
            margin-left: 10px;
        }
    }
`
export const HeaderBar = styled.header`
    position: fixed;
    top: 0;
    left: 380px;
    width: calc(100% - 380px);
    right: 0;
    height: 80px;
    border-bottom: 1px solid ${props => props.theme.colors.listBorderColor};
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
                color:${props => props.theme.colors.searchIconColor};
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
    border-right: 1px solid ${props => props.theme.colors.listBorderColor};
    background-color: ${props => props.theme.colors.colorF9};
    padding: 0 40px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
    h1{
        text-align: left;
        color:${props => props.theme.colors.mainTxtColor};
        font-size: 25px;
        font-weight: 600;
        padding: 25px 0 25px;
    }
`
export const MenuList = styled.ul`
    width: 100%;
    background-color: ${props => props.theme.colors.wrapColor};
    border-radius: 10px;
    box-shadow: 0px 0 5px 0px ${props => props.theme.colors.shadowColor};
    padding: 0 20px;
    margin-bottom: 30px;
    & > li{
        border-bottom: 1px solid ${props => props.theme.colors.listBorderColor};
        &:last-of-type{
            border-bottom:0;
        }
        & > button, & > a, & > h3{
                background-color: transparent;
                border: 0;
                color: ${props => props.theme.colors.mainTxtColor};
                font-size:20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0;
                width:100%;
                font-weight: 500;
                transition: 0.2s;
                svg{
                    color:${props => props.theme.colors.svgColor};
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
                  color:${props => props.theme.colors.subTxtColor};
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
    border: 1px solid ${props => props.theme.colors.listBorderColor};
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
    background: ${props => props.theme.colors.searchInputColor};
    border: 2px solid ${props => props.theme.colors.searchInputColor};
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
    background: ${props => props.theme.colors.wrapColor};
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
        color: ${props => props.theme.colors.mainTxtColor} !important;;
    }
`