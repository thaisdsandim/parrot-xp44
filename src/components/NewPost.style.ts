import styled from 'styled-components';

export const PostStyle = styled.div`

    max-width: 700px;
    margin: 0 auto;
    padding-top: 43px;

    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #C5C5C5;

  img{

    max-width: 100px;
    max-height: 75px;

  }
`;

export const PostForms = styled.form`
  align-items: flex-end;

textarea {
  
  resize: none;
  border: 1px solid #8BC34A;
  border-radius: 8px;

  min-width: 100%;
  min-height: 70px;

}
input {

  color: #FFFFFF;
  background: #6033AA;

  margin-bottom: 29px;
  margin-top: 18px;

  line-height: 16px;
  max-width: 170px;
  padding: 10px 40px 10px 40px;

  border-radius: 40px;
  border: none;

  font-family: 'Questrial';
  font-weight: 500;
  font-size: 17px;
}
`;
