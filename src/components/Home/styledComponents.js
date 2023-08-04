import styled from 'styled-components'

export const HomeRoute = styled.div``

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const HomeBannerAndVideosContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const BannerLogoAndCloseIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  padding: 40px;
`

export const HomeBannerLogo = styled.img`
  height: 30px;
  width: 120px;
`

export const BannerDescription = styled.p`
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #231f20;
  width: 40%;

  @media screen and (max-width: 700px) {
    font-size: 16px;
    width: 85%;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  height: 40px;
  width: 120px;
  border: 2px #231f20 solid;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Roboto';
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
`

export const HomeVideosContainer = styled.div`
  min-height: 90vh;
  background-color: ${props => (props.theme === true ? '#181818' : '#f9f9f9')};
  margin-top: 0px;
  padding: 20px;
`

export const SearchContainer = styled.div`
  height: 35px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: 500px) {
    width: 50%;
  }

  @media screen and (min-width: 1300px) {
    width: 40%;
  }
`

export const SearchInput = styled.input`
  height: 34px;
  width: 90%;
  background-color: ${props =>
    props.theme === true ? 'transparent' : '#ffffff'};
  border: 1px ${props => (props.theme === true ? '#909090' : '#cccccc')} solid;
  padding-left: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? ' #909090' : '#606060')};
`

export const SearchIconButton = styled.button`
  border: 1px ${props => (props.theme === true ? '#909090' : '#cccccc')} solid;
  height: 34px;
  width: 65px;
  outline: none;
  background-color: ${props => (props.theme === true ? '#424242' : '')};
  color: ${props => (props.theme === true ? ' #909090' : '#606060')};
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const VideoThumbnailUnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
`

export const NoSearchResultContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchResultImage = styled.img`
  height: 200px;
  width: 200px;

  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`

export const NoSearchResultHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#231f20')};
`
export const NoSearchResultPara = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
`

export const NoSearchRetryButton = styled.button`
  height: 35px;
  width: 90px;
  border-style: none;
  border-radius: 5px;
  background-color: #4f46e5;
  color: #f8fafc;
  font-size: 15px;
  font-weight: 500;
`
