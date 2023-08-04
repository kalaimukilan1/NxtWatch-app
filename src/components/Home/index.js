import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoCloseSharp} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoThumbnail from '../VideoThumbnail'
import FailureView from '../FailureView'

import {
  HomeRoute,
  HomeContainer,
  BannerContainer,
  HomeBannerLogo,
  BannerDescription,
  HomeBannerAndVideosContainer,
  BannerButton,
  BannerLogoAndCloseIcon,
  BannerCloseButton,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  LoaderContainer,
  VideoThumbnailUnOrderList,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultPara,
  NoSearchRetryButton,
} from './styledComponents'

const resultStatusConstant = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isBannerDisplay: true,
    searchValue: '',
    searchResult: '',
    resultStatus: resultStatusConstant.loading,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({resultStatus: resultStatusConstant.loading})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const updatedChannel = channelData => ({
      name: channelData.name,
      profileImageUrl: channelData.profile_image_url,
    })

    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        channel: updatedChannel(each.channel),
        id: each.id,
        title: each.title,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        searchResult: updatedData,
        resultStatus: resultStatusConstant.success,
      })
    } else {
      this.setState({resultStatus: resultStatusConstant.failure})
    }
  }

  onClickCloseButton = () => {
    this.setState({isBannerDisplay: false})
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickRetryBtn = () => {
    this.getVideoDetails()
  }

  renderHomeBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerLogoAndCloseIcon>
        <HomeBannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton
          type="button"
          onClick={this.onClickCloseButton}
          data-testid="close"
        >
          <IoCloseSharp size={20} />
        </BannerCloseButton>
      </BannerLogoAndCloseIcon>
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <BannerButton>GET IT NOW</BannerButton>
    </BannerContainer>
  )

  onClickSearchInput = () => {
    this.getVideoDetails()
  }

  renderSearchInput = isDark => {
    const {searchValue} = this.state
    return (
      <SearchContainer onClick={this.onClickSearchInput}>
        <SearchInput
          type="search"
          placeholder="Search"
          theme={isDark}
          onChange={this.onChangeSearch}
          value={searchValue}
        />
        <SearchIconButton theme={isDark}>
          <IoIosSearch size={20} />
        </SearchIconButton>
      </SearchContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderNoSearchResult = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSearchResultContainer>
            <NoSearchResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultHeading theme={isDark}>
              No Search results found
            </NoSearchResultHeading>
            <NoSearchResultPara>
              Try different key words or remove search filters
            </NoSearchResultPara>
            <NoSearchRetryButton onClick={this.onClickRetryBtn}>
              Retry
            </NoSearchRetryButton>
          </NoSearchResultContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeVideos = () => {
    const {searchResult} = this.state
    if (searchResult.length === 0) {
      return this.renderNoSearchResult()
    }
    return (
      <VideoThumbnailUnOrderList>
        {searchResult.map(each => (
          <VideoThumbnail thumbnailData={each} key={each.id} />
        ))}
      </VideoThumbnailUnOrderList>
    )
  }

  renderHomeVideosStatus = () => {
    const {resultStatus} = this.state
    switch (resultStatus) {
      case resultStatusConstant.loading:
        return this.renderLoader()
      case resultStatusConstant.success:
        return this.renderHomeVideos()
      case resultStatusConstant.failure:
        return <FailureView onClickRetryBtn={this.onClickRetryBtn} />
      default:
        return null
    }
  }

  render() {
    const {isBannerDisplay} = this.state
    return (
      <HomeRoute data-testid="home">
        <Header />
        <HomeContainer>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <>
                  <HomeBannerAndVideosContainer data-testid="home">
                    {isBannerDisplay === true ? this.renderHomeBanner() : ''}
                    <HomeVideosContainer theme={isDark}>
                      {this.renderSearchInput(isDark)}
                      {this.renderHomeVideosStatus()}
                    </HomeVideosContainer>
                  </HomeBannerAndVideosContainer>
                </>
              )
            }}
          </ThemeContext.Consumer>
        </HomeContainer>
      </HomeRoute>
    )
  }
}

export default Home
