import styled from "styled-components";

export const SignUpForm = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 3;

  form {
    margin: 0 15px;
  }

  .login-input {
    margin-top: 15px;

    input {
      height: 30px;
      font-size: 14px;
      padding: 0 10px

    }

    label {
      padding: 0 5px;
      line-height: 30px;
      font-size: 13px;
    }
  }
`
export const WriteBtn = styled.button`
  height: 30px;
  background-color: #d1d1d1;
  color: #fff;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin-top: 15px;
`
export const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 20px;
  right: 15px;
  color: #222;
  font-size: 15px;
`
export const LayerForm = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 3;

  h2 {
    font-weight: 600;
    color: #000;
    font-size: 24px;
  }

  .login-input {
    margin-top: 15px;

    input {
      height: 30px;
      font-size: 14px;
      padding: 0 10px

    }

    label {
      padding: 0 5px;
      line-height: 30px;
      font-size: 13px;
    }
  }

  .signUpBtn {
    border: 0;
    background-color: transparent;
    color: #000;
    text-align: left;
    margin-top: 10px;
    padding: 0;
    font-size: 14px;
    font-weight: 400;

    span {
      color: #1276E1;
    }
  }

  .errorTxt {
    margin-top: 15px;
    color: red;
    font-size: 14px;
    font-weight: 500;
  }

  .succBtn {
    border: 0;
    background-color: transparent;
    margin-top: 15px;
    color: #08c708;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }

  .profileTxt {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
`
export const LoginBtn = styled.button`
  height: 30px;
  background-color: #ddd;
  color: #333;
  border-radius: 5px;
  border: 0;
  font-size: 16px;
  text-align: center;
  width: 100%;
  margin-top: 15px;
  font-weight: 500;
`
export const SignUpBtn = styled.button`
  height: 30px;
  background-color: #888;
  color: #fff;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin-top: 15px;
`
export const UserForm = styled.div`
  padding: 20px 0;

  span {
    display: inline-block;
    padding: 0px 0 10px;
  }
`
export const LogOutBtn = styled.button`
  height: 30px;
  background-color: #f39191;
  color: #fff;
  border-radius: 5px;
  border: 0;
  font-size: 14px;
  text-align: center;
  width: 100%;
  margin-top: 15px;
`
export const ImageView = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 10px;
  margin: 0 auto;
  position: relative;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-top: 10px;
  overflow: hidden;

  input {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  svg {
    font-size: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    max-width: 100%;
  }
`
export const ChatBox = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
  border: 1px solid #ddd;
  background-color: #fff;
  .top {
    h2 {
      text-align: center;
      background-color: #f5f5f5;
      padding: 10px 0;

      div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #b9b9b9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        svg {
          font-size: 23px;
          color: #fff;
        }
      }

      span {
        display: inline-block;
        margin-top: 5px;
        font-weight: 500;
      }
    }

    button {
      top: 10px;
    }
  }

  .content {
    width: 400px;
    height: 280px;
    box-sizing: border-box;
    padding: 10px;
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

    & > div {
      min-height: 20px;
      line-height: 1.3;
      height: auto;
      display: flex;
      width: 100%;
      margin-bottom: 10px;
      &:last-of-type{
        margin-bottom: 0;
      }
      .chatBox {
        flex-grow: 1;

        span {
          display: block;
          font-size: 13px;
        }

        p {
          padding: 7px;
          font-size: 14px;
          font-weight: 400;
          border-radius: 10px;
          box-sizing: border-box;
          max-width: 60%;
          text-align: left;
        }
      }

      .prfileImg {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #b9b9b9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        overflow: hidden;

        svg {
          color: #fff;
          font-size: 23px;
        }

        img {
          max-width: 100%;
        }
      }
    }

    .left {
      display: flex;
      justify-content: left;

      p {
        display: inline-block;
        background-color: #f5f5f5;
        color: #222
      }
    }

    .right {
      display: flex;
      justify-content: right;
      text-align: right;

      p {
        display: inline-block;
        background-color: #1276E1;
        color: #fff;
      }

      .chatBox {
        margin-right: 5px;
      }
    }

  }

  .bottom {
    position: absolute;
    bottom: 5px;
    height: 40px;
    width: 380px;
    border: 1px solid #ddd;
    border-radius: 20px;
    left: 10px;
    padding: 10px;
    z-index: 1;

    input {
      height: 25px !important;
      resize: none;
      z-index: -1;
      box-sizing: border-box;
      width: 335px;
      position: absolute;
      border: 0;
      bottom: 5px;
      outline-color: transparent;
    }

    button {
      position: absolute;
      bottom: 5px;
      right: 10px;
      width: 30px;
      height: 30px;
      border: 0;
      background-color: transparent;
      z-index: 0;
      &.disabled{
        pointer-events: none;
        svg{
          color: #888;
        }
      }
      svg {
        width: 30px;
        height: 30px;
        color: #1276E1;
      }
    }
  }
`