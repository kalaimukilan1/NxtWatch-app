import styled from 'styled-components'

export const GamingRoute = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingVideosHeader = styled.div`
  background-color: ${props => (props.theme === true ? '#231f20' : '#ebebeb')};
  height: 150px;
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GamingIconContainer = styled.div`
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

export const GamingVideosRouteHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  margin-left: 15px;
`

export const GamingVideosWholeContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const GamingBgContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9 ')};
  min-height: 80vh;
  padding: 30px;
  padding-top: 50px;
  padding-left: 50px;
`

export const GamingVideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
`

export const GamingVideoList = styled.li`
  margin-bottom: 50px;
  margin-right: 10px;
  width: 100%;

  @media screen and (min-width: 400px) {
    width: 45%;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const GamingVideoImage = styled.img`
  height: 320px;
  width: 100%;
`

export const GamingVideoTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#231f20')};
  margin-bottom: 2px;
`

export const GamingVideoViewCount = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '  #94a3b8' : '#616e7c')};
  margin-top: 0px;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
