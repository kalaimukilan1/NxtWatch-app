import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'

import {
  GamingRoute,
  GamingVideosHeader,
  GamingIconContainer,
  GamingVideosRouteHeading,
  GamingVideosWholeContainer,
  GamingBgContainer,
  GamingVideoListContainer,
  GamingVideoList,
  GamingVideoImage,
  GamingVideoTitle,
  GamingVideoViewCount,
  LoaderContainer,
} from './styledComponents'

const renderStatusConstants = {
  isLoading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: '', renderStatus: renderStatusConstants.isLoading}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({renderStatus: renderStatusConstants.isLoading})
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        renderStatus: renderStatusConstants.success,
      })
    } else {
      this.setState({renderStatus: renderStatusConstants.failure})
    }
  }

  renderGamingVideosHeader = isDark => (
    <>
      <GamingVideosHeader theme={isDark}>
        <GamingIconContainer theme={isDark}>
          <HiFire size={30} color="#ff0000" />
        </GamingIconContainer>
        <GamingVideosRouteHeading theme={isDark}>
          Gaming
        </GamingVideosRouteHeading>
      </GamingVideosHeader>
    </>
  )

  renderGamingVideoItem = (videoDetails, isDark) => {
    const {thumbnailUrl, title, viewCount, id} = videoDetails
    return (
      <>
        <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
          <GamingVideoImage src={thumbnailUrl} alt="video thumbnail" />
          <GamingVideoTitle theme={isDark}>{title}</GamingVideoTitle>
          <GamingVideoViewCount theme={isDark}>
            {viewCount} Watching Worldwide
          </GamingVideoViewCount>
        </Link>
      </>
    )
  }

  renderGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <>
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <GamingVideosWholeContainer data-testid="gaming">
                {this.renderGamingVideosHeader(isDark)}
                <GamingBgContainer theme={isDark} data-testid="gaming">
                  <GamingVideoListContainer>
                    {gamingVideos.map(eachVideo => (
                      <GamingVideoList key={eachVideo.id}>
                        {this.renderGamingVideoItem(eachVideo, isDark)}
                      </GamingVideoList>
                    ))}
                  </GamingVideoListContainer>
                </GamingBgContainer>
              </GamingVideosWholeContainer>
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
    this.getGamingVideos()
  }

  renderVideoStatus = () => {
    const {renderStatus} = this.state

    switch (renderStatus) {
      case renderStatusConstants.success:
        return this.renderGamingVideos()
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
      <>
        <Header />
        <GamingRoute data-testid="gaming">
          <SideBar />
          {this.renderVideoStatus()}
        </GamingRoute>
      </>
    )
  }
}

export default Gaming
