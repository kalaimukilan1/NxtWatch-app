import {FaMoon} from 'react-icons/fa'
import {BiSun, BiListPlus} from 'react-icons/bi'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdExitToApp} from 'react-icons/md'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'
import {
  HeaderContainer,
  WebsiteLogo,
  ControllerContainer,
  ProfileImage,
  ThemeButton,
  LogoutButtonContainer,
  LogoutButton,
  PopupContainer,
  PopupHeading,
  PopupButtonContainer,
  PopupCancelButton,
  PopupConfirmButton,
  NavBarButton,
  LogoutButtonSm,
  NavUnOrderList,
  NavBarLink,
  LinkContainer,
  LinkIcon,
  PopupNavContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const onClickWebsiteLogo = () => {
    const {history} = props
    history.replace('/')
  }

  const renderPopupFile = isDark => (
    <Popup
      modal
      trigger={
        <LogoutButtonContainer>
          <LogoutButton theme={isDark}>Logout</LogoutButton>
          <LogoutButtonSm theme={isDark}>
            <MdExitToApp size={30} />
          </LogoutButtonSm>
        </LogoutButtonContainer>
      }
    >
      {close => (
        <PopupContainer theme={isDark}>
          <PopupHeading theme={isDark}>
            Are you sure, you want to logout
          </PopupHeading>
          <PopupButtonContainer>
            <PopupCancelButton onClick={() => close()}>
              Cancel
            </PopupCancelButton>
            <PopupConfirmButton onClick={onClickLogoutButton}>
              Confirm
            </PopupConfirmButton>
          </PopupButtonContainer>
        </PopupContainer>
      )}
    </Popup>
  )

  const renderNavOption = isDark => (
    <Popup
      modal
      trigger={
        <NavBarButton theme={isDark}>
          <GiHamburgerMenu size={30} />
        </NavBarButton>
      }
      position="top"
    >
      {close => (
        <PopupNavContainer>
          <NavUnOrderList theme={isDark}>
            <Link to="/" style={{textDecoration: 'none', outline: 'none'}}>
              <LinkContainer onClick={() => close()}>
                <LinkIcon theme={isDark}>
                  <AiFillHome size={20} />
                </LinkIcon>
                <NavBarLink theme={isDark}>Home</NavBarLink>
              </LinkContainer>
            </Link>

            <Link
              to="/trending"
              style={{textDecoration: 'none', outline: 'none'}}
            >
              <LinkContainer onClick={() => close()}>
                <LinkIcon theme={isDark}>
                  <HiFire size={20} />
                </LinkIcon>
                <NavBarLink theme={isDark}>Trending</NavBarLink>
              </LinkContainer>
            </Link>

            <Link
              to="/gaming"
              style={{textDecoration: 'none', outline: 'none'}}
            >
              <LinkContainer onClick={() => close()}>
                <LinkIcon theme={isDark}>
                  <SiYoutubegaming size={20} />
                </LinkIcon>
                <NavBarLink theme={isDark}>Gaming</NavBarLink>
              </LinkContainer>
            </Link>

            <Link
              to="/saved-videos"
              style={{textDecoration: 'none', outline: 'none'}}
            >
              <LinkContainer onClick={() => close()}>
                <LinkIcon theme={isDark}>
                  <BiListPlus size={20} />
                </LinkIcon>
                <NavBarLink theme={isDark}>Saved videos</NavBarLink>
              </LinkContainer>
            </Link>
          </NavUnOrderList>
        </PopupNavContainer>
      )}
    </Popup>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const websiteLogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <>
            <HeaderContainer theme={isDark}>
              <WebsiteLogo
                src={websiteLogo}
                alt="website logo"
                onClick={onClickWebsiteLogo}
              />
              <ControllerContainer>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={changeTheme}
                >
                  {isDark ? (
                    <BiSun size={30} color="#ffffff" />
                  ) : (
                    <FaMoon size={25} />
                  )}
                </ThemeButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                {renderNavOption(isDark)}
                {renderPopupFile(isDark)}
              </ControllerContainer>
            </HeaderContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
