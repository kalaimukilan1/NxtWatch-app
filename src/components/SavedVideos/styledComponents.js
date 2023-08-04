import styled from 'styled-components'

export const SavedVideosRoute = styled.div``

export const SavedVideosBgRoute = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosWholeContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const SavedVideosHeader = styled.div`
  background-color: ${props => (props.theme === true ? '#231f20' : '#ebebeb')};
  height: 150px;
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SavedIconContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#d7dfe9')};
  height: 80px;
  width: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-style: none;
  border-radius: 50px;
`

export const SavedVideosRouteHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  margin-left: 15px;
`

export const SavedVideosBgContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9 ')};
  min-height: 80vh;
  padding: 30px;
  padding-top: 50px;
  padding-left: 50px;
`

export const SavedVideosUnOrderList = styled.div``

export const NoSavedVideoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 80%;
    min-height: 60vh;
  }
`

export const NoSavedVideoImage = styled.img`
  width: 50%;

  @media screen and (max-width: 400px) {
    width: 70%;
  }
`
export const NoSavedHeading = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#231f20')};
  margin-top: 40px;
  margin-bottom: 3px;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`

export const NoSavedDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? ' #e2e8f0' : '#616e7c')};

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`
