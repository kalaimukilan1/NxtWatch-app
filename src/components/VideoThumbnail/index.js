import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'

import {
  ThumbnailList,
  ThumbnailImage,
  ProfileImage,
  ProfileImageAndTitleContainer,
  ProfileTitleContainer,
  ProfileTitle,
  ChannelName,
  VideoCountAndDate,
  VideoViewsCount,
  VideoPublishedDate,
} from './styledComponents'

const VideoThumbnail = props => {
  const {thumbnailData} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = thumbnailData
  const {profileImageUrl, name} = channel

  const formattedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <>
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ThumbnailList>
              <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <ProfileImageAndTitleContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <ProfileTitleContainer>
                    <ProfileTitle theme={isDark}>{title}</ProfileTitle>
                    <ChannelName>{name}</ChannelName>
                    <VideoCountAndDate>
                      <VideoViewsCount>{viewCount} </VideoViewsCount>
                      <BsDot size={20} color="#64748b" />
                      <VideoPublishedDate>
                        {formattedDate} ago
                      </VideoPublishedDate>
                    </VideoCountAndDate>
                  </ProfileTitleContainer>
                </ProfileImageAndTitleContainer>
              </Link>
            </ThumbnailList>
          )
        }}
      </ThemeContext.Consumer>
    </>
  )
}

export default VideoThumbnail
