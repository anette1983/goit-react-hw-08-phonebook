import styled from 'styled-components';

const StyledForm = styled.form`
  width: 300px;
  /* border: 1px solid black; */
  border: 1px solid rgba(33, 33, 33, 0.2);
  padding: 12px;
  margin: 15px 0;

  /* display: flex;
flex-direction: column;
justify-content: center;
 */
  & input {
    padding: 8px;
    font-family: inherit;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }

  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
`;

export default StyledForm;
