import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  selectedRoute: 'HOME',
  changeSelectedRoute: () => {},
  onSaveVideo: () => {},
  savedVideosList: [],
})

export default ThemeContext
