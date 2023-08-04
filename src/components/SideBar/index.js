import {Component} from 'react'

import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  SideBarBgContainer,
  SideBarContainer,
  NavLinksContainer,
  LinkContainer,
  LinkPara,
  LinkIcon,
  ContactUsContainer,
  ContactUsPara,
  ContactIconsContainer,
  SocialMediaLogo,
  ContactUsDescription,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SideBarBgContainer theme={isDark}>
              <SideBarContainer>
                <NavLinksContainer>
                  <Link
                    to="/"
                    style={{textDecoration: 'none', outline: 'none'}}
                  >
                    <LinkContainer>
                      <LinkIcon theme={isDark}>
                        <AiFillHome size={20} />
                      </LinkIcon>
                      <LinkPara theme={isDark}>Home</LinkPara>
                    </LinkContainer>
                  </Link>

                  <Link
                    to="/trending"
                    style={{textDecoration: 'none', outline: 'none'}}
                  >
                    <LinkContainer>
                      <LinkIcon theme={isDark}>
                        <HiFire size={20} />
                      </LinkIcon>
                      <LinkPara theme={isDark}>Trending</LinkPara>
                    </LinkContainer>
                  </Link>

                  <Link
                    to="/gaming"
                    style={{textDecoration: 'none', outline: 'none'}}
                  >
                    <LinkContainer>
                      <LinkIcon theme={isDark}>
                        <SiYoutubegaming size={20} />
                      </LinkIcon>
                      <LinkPara theme={isDark}>Gaming</LinkPara>
                    </LinkContainer>
                  </Link>

                  <Link
                    to="/saved-videos"
                    style={{textDecoration: 'none', outline: 'none'}}
                  >
                    <LinkContainer>
                      <LinkIcon theme={isDark}>
                        <BiListPlus size={20} />
                      </LinkIcon>
                      <LinkPara theme={isDark}>Saved videos</LinkPara>
                    </LinkContainer>
                  </Link>
                </NavLinksContainer>

                <ContactUsContainer>
                  <ContactUsPara theme={isDark}>CONTACT US</ContactUsPara>
                  <ContactIconsContainer>
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SocialMediaLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </ContactIconsContainer>
                  <ContactUsDescription theme={isDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </ContactUsDescription>
                </ContactUsContainer>
              </SideBarContainer>
            </SideBarBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
