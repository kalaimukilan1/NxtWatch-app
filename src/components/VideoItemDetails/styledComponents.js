import styled from 'styled-components'

export const VideoItemDetailRoute = styled.div``

export const VideoItemRoute = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  min-height: 80vh;
  width: 100%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const VideoItemTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 30px;
  margin-bottom: 20px;
  color: ${props => (props.theme === true ? '#f1f1f1' : '#383838')};

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const ViewAndLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewsAndPublishedDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const VideoViewsCount = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #64748b;
  margin-right: 2px;
`

export const VideoPublishedDate = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #64748b;
`

export const VideoItemButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
`

export const VideoItemButton = styled.button`
  background-color: transparent;
  border-style: none;
  color: ${props => (props.theme === true ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  margin-right: 10px;
`

export const HorizontalLine = styled.hr`
  color: #64748b;
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 25px;
`

export const ChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const ChannelDetailsContainer = styled.div``

export const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#ebebeb' : '#383838')};
`

export const ChannelSubscribers = styled.p`
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
`

export const ChannelDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#ebebeb' : '#616e7c')};
  line-height: 1.5;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
