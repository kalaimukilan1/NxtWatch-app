import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 80px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${props => (props.theme === true ? '#383838' : '#ffffff')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 320px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;

  @media screen and (max-width: 320px) {
    height: 20px;
    width: 80px;
  }
`

export const ControllerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  margin-left: 20px;
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButtonContainer = styled.div``

export const LogoutButton = styled.button`
  height: 30px;
  width: 90px;
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => (props.theme === true ? '#f8fafc' : '#3b82f6')};
  color: ${props => (props.theme === true ? '#f8fafc' : '#3b82f6')};
  font-size: 14px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 20px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButtonSm = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  margin-left: 5px;
  color: ${props => (props.theme === true ? '#ffffff' : '#212121')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#383838' : '#f8fafc')};
  height: 200px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: none;
  border-radius: 5px;
`

export const PopupHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.theme === true ? '#f8fafc' : '#1e293b')};
`

export const PopupButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const PopupCancelButton = styled.button`
  height: 40px;
  width: 80px;
  border: 1px #94a3b8 solid;
  background-color: transparent;
  border-radius: 2px;
  color: #94a3b8;
  font-size: 16px;
  font-weight: 500;
  margin: 20px;
`

export const PopupConfirmButton = styled.button`
  height: 40px;
  width: 80px;
  border-style: none;
  border-radius: 2px;
  background-color: #3b82f6;
  color: #f8fafc;
  font-size: 16px;
  font-weight: 500;
  margin: 20px;
`

export const NavBarButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  margin-left: 10px;
  color: ${props => (props.theme === true ? '#ffffff' : '#212121')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupNavContainer = styled.div`
  min-height: 80vh;
`

export const NavUnOrderList = styled.ul`
  list-style-type: none;
  background-color: ${props => (props.theme === true ? '#181818' : ' #e2e8f0')};
  padding: 20px;
  padding-top: 35px;
  margin: 0px;
  min-height: 200px;
  width: 100vh;
`

export const NavBarLink = styled.li`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.theme === true ? ' #f1f1f1' : '#212121')};
  margin-left: 25px;
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`

export const LinkIcon = styled.i`
  color: ${props => (props.theme === true ? '#f9f9f9' : '#383838')};
`
