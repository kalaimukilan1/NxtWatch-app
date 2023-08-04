import styled from 'styled-components'

export const NotFoundWholeContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9 ')};
  min-height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  height: 400px;
  width: 40%;
`

export const NotFoundHeading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
`
export const NotFoundDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '  #94a3b8' : '#616e7c')};
  margin-top: 2px;
`
