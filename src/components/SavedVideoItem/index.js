import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideoItemContainer,
  SavedVideoItemTitle,
  SavedVideoImage,
  SavedVideoChannelName,
  SavedVideoDetailsCon,
  VideoViewsCount,
  VideoViewsAndDateContainer,
  VideoPublishedDate,
} from './styledComponents'

class SavedVideoItem extends Component {
  render() {
    const {savedVideoDetails} = this.props
    const {
      thumbnailUrl,
      title,
      channel,
      viewCount,
      publishedAt,
      id,
    } = savedVideoDetails
    const {name} = channel
    const publishedDate = formatDistanceToNow(new Date(publishedAt))
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <SavedVideoItemContainer>
                <SavedVideoImage src={thumbnailUrl} alt="video thumbnail" />
                <SavedVideoDetailsCon>
                  <SavedVideoItemTitle theme={isDark}>
                    {title}
                  </SavedVideoItemTitle>
                  <SavedVideoChannelName>{name}</SavedVideoChannelName>
                  <VideoViewsAndDateContainer>
                    <VideoViewsCount>{viewCount} views</VideoViewsCount>
                    <BsDot size={20} color="#64748b" />
                    <VideoPublishedDate>{publishedDate} ago</VideoPublishedDate>
                  </VideoViewsAndDateContainer>
                </SavedVideoDetailsCon>
              </SavedVideoItemContainer>
            </Link>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideoItem
