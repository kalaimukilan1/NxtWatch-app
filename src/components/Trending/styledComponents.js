import styled from 'styled-components'

export const TrendingRoute = styled.div``

export const TrendingRouteBg = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingVideosWholeContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const TrendingVideosHeader = styled.div`
  background-color: ${props => (props.theme === true ? '#231f20' : '#ebebeb')};
  height: 150px;
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TrendingIconContainer = styled.div`
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

export const TrendingVideosRouteHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  margin-left: 15px;
`

export const TrendingBgContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9 ')};
  min-height: 80vh;
  padding: 30px;
  padding-top: 50px;
  padding-left: 50px;
`

export const TrendingVideoUnOrderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
