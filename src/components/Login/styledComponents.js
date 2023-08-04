import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  padding: 20px;

  background-color: ${props => (props.theme === true ? ' #212121' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  min-height: 300px;
  width: 400px;
  box-shadow: ${props =>
    props.theme === true ? '' : '4px 0px 16px 4px #e2e8f0'};
  padding: 20px;
  padding-bottom: 40px;
  border-style: none;
  border-radius: 5px;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
  margin-bottom: 20px;
  align-self: center;
`

export const InputAndLabelContainer = styled.div`
  margin-top: 15px;
`

export const CustomLabel = styled.label`
  font-size: 10px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#94a3b8')};
`

export const CustomInput = styled.input`
  height: 35px;
  width: 90%;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.theme === true ? '#64748b' : '#e2e8f0')};
  border-radius: 5px;
  background-color: transparent;
  padding: 5px;
  padding-left: 10px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#e2e8f0' : '#616e7c')};
  outline: none;
  margin-top: 3px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: 'row';
  align-items: 'center';
  margin-top: 10px;
`

export const CheckBox = styled.input``

export const CheckBoxLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#f9f9f9' : '#1e293b')};
`

export const LoginButton = styled.button`
  height: 30px;
  width: 90%;
  background-color: #3b82f6;
  font-size: 12px;
  font-weight: 600;
  border-style: none;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 25px;
`

export const ErrorPara = styled.p`
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ff0000;
  margin-top: 1px;
`
