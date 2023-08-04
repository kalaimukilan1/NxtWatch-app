import styled from 'styled-components'

export const SavedVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SavedVideoImage = styled.img`
  height: 250px;
  width: 100%;
  margin-right: 20px;

  @media screen and (max-width: 350px) {
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1000px) {
    width: 450px;
  }
`

export const SavedVideoDetailsCon = styled.div``

export const SavedVideoItemTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f8fafc' : '#181818')};
  line-height: 1.5;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`

export const SavedVideoChannelName = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  margin-bottom: 2px;
`

export const VideoViewsAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoViewsCount = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`

export const VideoPublishedDate = styled.p`
  font-size: 17px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`
