import styled from 'styled-components';

export const FormContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 30px auto;
  border-radius: 8px;
  box-shadow: 10px 10px 10px #3d336b;
  padding: 20px;
  border-radius: 5px;
  background-color: #171150;

`

export const InputGroup = styled.div`

    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

`

export const Label = styled.label`
    
    font-size: 20px;
    color: #cf7bff;
    font-weight: bold;
    font-family: 'JetBrains Mono', Arial;
    margin-bottom: 5px;

`

export const Input = styled.input`

    border-radius: 5px;
    padding: 10px;
    border: none;
    font-size: 15px;
    background-color: #00306e;
    margin-bottom: 10px;
    font-family: 'JetBrains Mono';
    color: white;

    &:focus {
        background-color: midnightblue;
        outline: none;
    }

`

export const TextArea = styled.textarea`

    border-radius: 5px;
    padding: 10px;
    border: none;
    font-size: 15px;
    height: auto;
    resize: none;
    background-color: #00306e;
    font-family: 'JetBrains Mono';
    color: white;
    overflow: hidden;
    min-height: 100px;

  &:focus {
    outline: none;
    background-color: midnightblue;
  }

`

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: flex-end;

`