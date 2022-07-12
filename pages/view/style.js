import styled from "styled-components";

export const Section = styled.section`
    width: calc(100% - 380px);
    height: 100vh;
    color:#555;
    overflow: hidden;
    padding: 30px;
    box-sizing: border-box;
    margin-left: 380px;

`
export const ViewTop = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 0 0px 10px;
    h2{
        font-weight: 500;
        font-size: 30px;
        color: #222;
        span{
            font-size: 20px;
            color: #555;
            font-weight: 600;
            display: block;
            margin-bottom: 5px;
        }
    }
    span{
        font-size: 16px;
        font-weight: 400;
        color: #222;
    }
`
export const Content = styled.div`
    padding: 30px 0;
    width: 100%;
    height: calc(100% - 60px);
    box-sizing: border-box;
    overflow-y: auto;
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
`