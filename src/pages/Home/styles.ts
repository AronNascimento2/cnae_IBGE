import styled from "styled-components";

export const Container = styled.div`
.header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
input{
  width: 300px;
  height: 20px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
  .item {
    width: 100%;
    height: 30px;
    display: flex;
    margin-bottom: 5px;
  }
  .item :hover {
    justify-content: center;

    cursor: pointer;
    background-color: #888;
    color: #fff;
  }
`;
