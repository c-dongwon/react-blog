import styled from "styled-components";

export const Section = styled.section`
  width: calc(100% - 380px);
  background: ${props => props.theme.colors.wrapColor};
  color: #555;
  padding: 30px;
  box-sizing: border-box;
  margin-left: 380px;
  padding-top: 0;
`
export const ViewTop = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 30px 0px 10px;
  position: sticky;
  z-index: 9999;
  top: 0;
  background: #fff;
  background: ${props => props.theme.colors.wrapColor};
  h2 {
    font-weight: 500;
    font-size: 30px;
    color: ${props => props.theme.colors.subTxtColor};

    span {
      font-size: 20px;
      color: #1276E1;
      font-weight: 600;
      display: block;
      margin-bottom: 5px;
    }
  }
  
  time {
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.subTxtColor};
  }
`
export const Content = styled.div`
  padding: 30px 0;
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  color: ${props => props.theme.colors.subTxtColor};
`
export const CommentBox = styled.div`
  & > p {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.subTxtColor};
  }

  .commentInput {
    text-align: right;

    textarea {
      width: 100%;
      height: 150px !important;
      resize: none;
      box-sizing: border-box;
      padding: 10px;
      border-color: #ddd;
      border-radius: 10px;
      background-color: ${props => props.theme.colors.wrapColor};
      color: ${props => props.theme.colors.mainTxtColor};
      &::placeholder{
        color: ${props => props.theme.colors.subTxtColor};
      }
    }

    button {
      height: 30px;
      background-color: #6798d0;
      color: #fff;
      border-radius: 5px;
      border: 0;
      font-size: 16px;
      text-align: center;
      width: 70px;
      margin-top: 15px;
      font-weight: 500;
    }
  }

  .commentList {
    padding: 50px 0;

    li {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      .img{
        width: 50px;
        height: 50px;
        background-color: #ddd;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
      .txt {
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 20px;
        width: calc(100% - 60px);
        &:last-of-type {
          margin-bottom: 0;
        }
        button{
          border: 0;
          background-color: transparent;
          color: red;
          margin-left: 5px;
          font-size: 14px;
        }
        h3 {
          background-color: ${props => props.theme.colors.commentColor};
          border-radius: 5px 5px 0 0;
          padding: 10px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          color: ${props => props.theme.colors.mainTxtColor};
          span {
            font-size: 16px;

            &:first-of-type {
              font-weight: 500;
            }

            &:last-of-type {
              font-size: 14px;
              font-weight: 400;
            }
          }
        }
      }
    }

    p {
      padding: 20px 10px;
      color: ${props => props.theme.colors.subTxtColor};
    }
  }
`