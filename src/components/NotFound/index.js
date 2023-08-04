import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundWholeContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <NotFoundWholeContainer>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {isDark} = value
              const notFoundImgUrl =
                isDark === true
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              return (
                <NotFoundContainer theme={isDark}>
                  <NotFoundImage src={notFoundImgUrl} alt="not found" />
                  <NotFoundHeading theme={isDark}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundDescription theme={isDark}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundDescription>
                </NotFoundContainer>
              )
            }}
          </ThemeContext.Consumer>
        </NotFoundWholeContainer>
      </>
    )
  }
}

export default NotFound
