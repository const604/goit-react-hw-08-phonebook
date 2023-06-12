import styled from 'styled-components';

export const Item = styled.li`
  padding-left: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  line-height: 1.5;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 25px;
  border: 0;
  border-radius: 2%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
