import styled from "styled-components";

export const Section = styled.section`
    margin-left: 380px;
    padding: 70px 50px;
    .writeTop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            height: 40px;
            border: 0;
            background-color: transparent;
            font-size: 30px;
           svg{
             color:#6b6b6b
           }
        }
        input[type="text"]{
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 47%;
        padding: 10px 5px;
        font-size:16px;
        height: 40px;
          background-color: ${props => props.theme.colors.wrapColor};
          color:${props => props.theme.colors.mainTxtColor};
        &::placeholder{
            color:${props => props.theme.colors.subTxtColor};
            font-size:16px;
        }
    }
    select{
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 47%;
        padding: 10px 5px;
        color:#555;
        font-size:16px;
        height: 40px;
      background-color: ${props => props.theme.colors.wrapColor};
      color:${props => props.theme.colors.mainTxtColor};
      &::placeholder{
        color:${props => props.theme.colors.subTxtColor};
        font-size:16px;
      }
    }
    }
  .writeTop{
    margin-bottom: 30px;
  }
    .toastui-editor {
      .ProseMirror .placeholder{
        color: transparent;
      }
    }
    .ql-editor, .ql-container{
        min-height: 560px;
    }
    .btnWrap{
        margin-top: 30px;
        text-align: center;
        button{
            width: 180px;
            height: 45px;
            border: 0;
            background-color: #555;
            color:#fff;
        }
    }
`

