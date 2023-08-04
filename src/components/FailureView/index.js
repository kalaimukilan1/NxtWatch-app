import ThemeContext from '../../context/ThemeContext'

import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewPara,
  FailureViewRetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetryBtn} = props
  const onClickFailureViewRetryBtn = () => {
    onClickRetryBtn()
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const FailureImage =
          isDark === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer theme={isDark}>
            <FailureViewImage src={FailureImage} alt="failure view" />
            <FailureViewHeading theme={isDark}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewPara>
              We are Having some trouble to complete your request. <br /> Please
              Try again.
            </FailureViewPara>
            <FailureViewRetryButton onClick={onClickFailureViewRetryBtn}>
              Retry
            </FailureViewRetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default FailureView
