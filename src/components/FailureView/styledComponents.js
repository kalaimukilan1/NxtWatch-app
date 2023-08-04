import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f1f1f1')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureViewImage = styled.img`
  height: 300px;
  width: 220px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1200px) {
    width: 450px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#231f20')};
  text-align: center;
`

export const FailureViewPara = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  text-align: center;
`
export const FailureViewRetryButton = styled.button`
  height: 35px;
  width: 90px;
  border-style: none;
  border-radius: 5px;
  background-color: #4f46e5;
  color: #f8fafc;
  font-size: 15px;
  font-weight: 500;
`
