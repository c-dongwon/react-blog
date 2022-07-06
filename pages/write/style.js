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
            color:#555;
        }
        input[type="text"]{
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 47%;
        padding: 10px 5px;
        font-size:16px;
        height: 40px;
        &::placeholder{
            color:#555;
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
    }
    }

`

