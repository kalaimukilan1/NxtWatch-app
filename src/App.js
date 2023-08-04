import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './context/ThemeContext'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDark: false, savedVideosList: []}

  onChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onSaveVideo = videoDetails => {
    const {savedVideosList} = this.state

    const isAlreadySaved = savedVideosList.find(
      each => each.id === videoDetails.id,
    )

    if (isAlreadySaved === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    } else if (isAlreadySaved !== undefined) {
      const filteredSavedVideosList = savedVideosList.filter(
        each => each.id !== videoDetails.id,
      )

      this.setState({savedVideosList: filteredSavedVideosList})
    }
  }

  render() {
    const {isDark, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          changeTheme: this.onChangeTheme,
          isDark,
          onSaveVideo: this.onSaveVideo,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
