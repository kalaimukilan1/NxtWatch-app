import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosRoute,
  SavedVideosBgRoute,
  SavedVideosWholeContainer,
  SavedVideosHeader,
  SavedVideosRouteHeading,
  SavedIconContainer,
  SavedVideosBgContainer,
  SavedVideosUnOrderList,
  NoSavedVideoContainer,
  NoSavedVideoImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideosView = isDark => (
    <NoSavedVideoContainer theme={isDark}>
      <NoSavedVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading theme={isDark}>No saved videos found</NoSavedHeading>
      <NoSavedDescription>
        Save your videos by clicking a button
      </NoSavedDescription>
    </NoSavedVideoContainer>
  )

  renderSavedVideosHeader = isDark => (
    <>
      <SavedVideosHeader theme={isDark}>
        <SavedIconContainer theme={isDark}>
          <HiFire size={30} color="#ff0000" />
        </SavedIconContainer>
        <SavedVideosRouteHeading theme={isDark}>
          Saved Videos
        </SavedVideosRouteHeading>
      </SavedVideosHeader>
    </>
  )

  render() {
    return (
      <SavedVideosRoute data-testid="savedVideos">
        <Header />
        <SavedVideosBgRoute data-testid="savedVideos">
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {isDark, savedVideosList} = value
              return (
                <>
                  {savedVideosList.length !== 0 ? (
                    <SavedVideosWholeContainer>
                      {this.renderSavedVideosHeader(isDark)}

                      <SavedVideosBgContainer
                        theme={isDark}
                        data-testid="savedVideos"
                      >
                        <SavedVideosUnOrderList>
                          {savedVideosList.map(eachVideo => (
                            <SavedVideoItem
                              savedVideoDetails={eachVideo}
                              key={eachVideo.id}
                            />
                          ))}
                        </SavedVideosUnOrderList>
                      </SavedVideosBgContainer>
                    </SavedVideosWholeContainer>
                  ) : (
                    this.renderNoSavedVideosView(isDark)
                  )}
                </>
              )
            }}
          </ThemeContext.Consumer>
        </SavedVideosBgRoute>
      </SavedVideosRoute>
    )
  }
}

export default SavedVideos
