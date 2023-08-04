import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Player from 'react-player'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import {
  VideoItemDetailRoute,
  VideoItemRoute,
  VideoItemTitle,
  VideoItemDetailContainer,
  ViewAndLikesContainer,
  VideoViewsCount,
  VideoPublishedDate,
  ViewsAndPublishedDateContainer,
  VideoItemButton,
  VideoItemButtonContainer,
  HorizontalLine,
  ChannelContainer,
  ChannelProfileImage,
  ChannelName,
  ChannelDetailsContainer,
  ChannelSubscribers,
  ChannelDescription,
  LoaderContainer,
} from './styledComponents'

const renderStatusConstants = {
  isLoading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: '',
    renderStatus: renderStatusConstants.isLoading,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({renderStatus: renderStatusConstants.isLoading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedChannelData = channelDetails => ({
        name: channelDetails.name,
        profileImageUrl: channelDetails.profile_image_url,
        subscriberCount: channelDetails.subscriber_count,
      })
      const updatedData = {
        channel: updatedChannelData(data.video_details.channel),
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        renderStatus: renderStatusConstants.success,
      })
    } else {
      this.setState({renderStatus: renderStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDisLikeBtn = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  changeSaveBtnColor = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderVideoItemDetail = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    const saveBtnValue = isSaved === true ? 'Saved' : 'Save'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onSaveVideo} = value
          const onClickSaveBtn = () => {
            onSaveVideo(videoDetails)
          }
          return (
            <VideoItemDetailContainer theme={isDark}>
              <Player url={videoUrl} height="50vh" width="100%" controls />
              <VideoItemTitle theme={isDark}>{title}</VideoItemTitle>
              <ViewAndLikesContainer>
                <ViewsAndPublishedDateContainer>
                  <VideoViewsCount>{viewCount} views</VideoViewsCount>

                  <BsDot size={20} color="#64748b" />

                  <VideoPublishedDate>{formattedDate} ago</VideoPublishedDate>
                </ViewsAndPublishedDateContainer>

                <VideoItemButtonContainer>
                  <VideoItemButton
                    onClick={this.onClickLikeButton}
                    theme={isLiked}
                  >
                    {' '}
                    <BiLike size={25} style={{marginRight: '5px'}} /> Like
                  </VideoItemButton>

                  <VideoItemButton
                    onClick={this.onClickDisLikeBtn}
                    theme={isDisliked}
                  >
                    <BiDislike size={25} style={{marginRight: '5px'}} /> Dislike
                  </VideoItemButton>

                  <VideoItemButton
                    onClick={() => {
                      onClickSaveBtn()
                      this.changeSaveBtnColor()
                    }}
                    theme={isSaved}
                  >
                    {' '}
                    <BiListPlus size={25} style={{marginRight: '5px'}} />{' '}
                    {saveBtnValue}
                  </VideoItemButton>
                </VideoItemButtonContainer>
              </ViewAndLikesContainer>
              <HorizontalLine />

              <ChannelContainer>
                <ChannelProfileImage src={profileImageUrl} alt="channel logo" />
                <ChannelDetailsContainer>
                  <ChannelName theme={isDark}>{name}</ChannelName>
                  <ChannelSubscribers>
                    {subscriberCount} subscribers
                  </ChannelSubscribers>
                  <ChannelDescription theme={isDark}>
                    {description}
                  </ChannelDescription>
                </ChannelDetailsContainer>
              </ChannelContainer>
            </VideoItemDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryBtn = () => {
    this.getVideoItemDetails()
  }

  renderVideoStatus = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case renderStatusConstants.success:
        return this.renderVideoItemDetail()
      case renderStatusConstants.isLoading:
        return this.renderLoader()
      case renderStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemDetailRoute data-testid="videoItemDetails">
        <Header />
        <VideoItemRoute>
          <SideBar />
          {this.renderVideoStatus()}
        </VideoItemRoute>
      </VideoItemDetailRoute>
    )
  }
}

export default withRouter(VideoItemDetails)
