import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  TrendingRoute,
  LoaderContainer,
  TrendingRouteBg,
  TrendingVideosWholeContainer,
  TrendingVideosHeader,
  TrendingIconContainer,
  TrendingVideosRouteHeading,
  TrendingBgContainer,
  TrendingVideoUnOrderedList,
} from './styledComponents'

const renderStatusConstants = {
  isLoading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {trendingVideos: '', renderStatus: renderStatusConstants.isLoading}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({renderStatus: renderStatusConstants.isLoading})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
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
      })
      const updatedData = data.videos.map(each => ({
        channel: updatedChannelData(each.channel),
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingVideos: updatedData,
        renderStatus: renderStatusConstants.success,
      })
    } else {
      this.setState({renderStatus: renderStatusConstants.failure})
    }
  }

  renderTrendingVideosHeader = isDark => (
    <>
      <TrendingVideosHeader theme={isDark}>
        <TrendingIconContainer theme={isDark}>
          <HiFire size={30} color="#ff0000" />
        </TrendingIconContainer>
        <TrendingVideosRouteHeading theme={isDark}>
          Trending
        </TrendingVideosRouteHeading>
      </TrendingVideosHeader>
    </>
  )

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <TrendingVideosWholeContainer data-testid="trending">
                {this.renderTrendingVideosHeader(isDark)}
                <TrendingBgContainer theme={isDark} data-testid="trending">
                  <TrendingVideoUnOrderedList>
                    {trendingVideos.map(eachVideo => (
                      <SavedVideoItem
                        savedVideoDetails={eachVideo}
                        key={eachVideo.published_at}
                      />
                    ))}
                  </TrendingVideoUnOrderedList>
                </TrendingBgContainer>
              </TrendingVideosWholeContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryBtn = () => {
    this.getTrendingVideos()
  }

  renderVideoStatus = () => {
    const {renderStatus} = this.state
    switch (renderStatus) {
      case renderStatusConstants.success:
        return this.renderTrendingVideos()
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
      <TrendingRoute data-testid="trending">
        <Header />
        <TrendingRouteBg data-testid="trending">
          <SideBar />
          {this.renderVideoStatus()}
        </TrendingRouteBg>
      </TrendingRoute>
    )
  }
}

export default TrendingVideos
