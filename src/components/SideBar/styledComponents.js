import styled from 'styled-components'

export const SideBarBgContainer = styled.div`
  width: 20%;
  background-color: ${props => (props.theme === true ? '#383838' : '#ffffff')};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SideBarContainer = styled.div`
  min-height: 90vh;
  padding: 10px;
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const NavLinksContainer = styled.div``

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LinkIcon = styled.i`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#383838')};
`

export const LinkPara = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: 'roboto';
  color: ${props => (props.theme === true ? '#f9f9f9' : '#383838')};
  margin-left: 20px;
`

export const ContactUsContainer = styled.div``

export const ContactUsPara = styled.p`
  font-size: 19px;
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 25px;
`
export const ContactIconsContainer = styled.div``

export const SocialMediaLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
`

export const ContactUsDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? '#f9f9f9' : '#1e293b')};
  line-height: 1.5;
  width: 80%;
`
