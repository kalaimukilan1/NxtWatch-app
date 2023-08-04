import styled from 'styled-components'

export const ThumbnailList = styled.li`
  width: 100%;
  min-height: 200px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    width: 47%;
    margin-bottom: 50px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ThumbnailImage = styled.img`
  height: 200px;
  width: 100%;

  @media screen and (min-width: 400px) {
    height: 250px;
    width: 95%;
  }

  @media screen and (min-width: 576px) {
    height: 150px;
    width: 95%;
  }
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  margin-right: 10px;
`

export const ProfileImageAndTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`

export const ProfileTitleContainer = styled.div``

export const ProfileTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.5;
  color: ${props => (props.theme === true ? ' #f1f1f1' : '#1e293b')};
`

export const ChannelName = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  margin-top: 1px;
  margin-bottom: 0px;
`

export const VideoCountAndDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoViewsCount = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
`

export const VideoPublishedDate = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
`
