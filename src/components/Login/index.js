import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginCard,
  WebsiteLogo,
  InputAndLabelContainer,
  CustomLabel,
  CustomInput,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorPara,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickCheckbox = () =>
    this.setState(prevState => ({isChecked: !prevState.isChecked}))

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = error => {
    this.setState({errorMsg: error, isError: true})
  }

  onClickLoginButton = async event => {
    this.setState({isError: false})
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isError, errorMsg, isChecked} = this.state
    const passwordInput = isChecked === true ? 'text' : 'password'

    const cookie = Cookies.get('jwt_token')
    if (cookie !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer theme={isDark}>
              <LoginCard theme={isDark}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <form onSubmit={this.onClickLoginButton}>
                  <InputAndLabelContainer>
                    <CustomLabel theme={isDark} htmlFor="username">
                      USERNAME
                    </CustomLabel>
                    <CustomInput
                      type="text"
                      theme={isDark}
                      placeholder="Username"
                      id="username"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </InputAndLabelContainer>
                  <InputAndLabelContainer>
                    <CustomLabel theme={isDark} htmlFor="password">
                      PASSWORD
                    </CustomLabel>
                    <CustomInput
                      type={passwordInput}
                      theme={isDark}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </InputAndLabelContainer>
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      id="checkBox"
                      checked={isChecked}
                      onClick={this.onClickCheckbox}
                    />
                    <CheckBoxLabel htmlFor="checkBox" theme={isDark}>
                      Show Password{' '}
                    </CheckBoxLabel>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isError ? <ErrorPara>*{errorMsg}</ErrorPara> : ''}
                </form>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
