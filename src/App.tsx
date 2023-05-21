/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import Orientation from 'react-native-orientation-locker'
import { NavigationContainer } from '@react-navigation/native'

import { initFoundationConfig } from './core/foundation'

// managers
import { ModalGlobal } from './managers/ModalGlobal'
import navigationRef from './managers/Navigator/RootNavigation'

// screens
import { Main } from './scenes/home'

initFoundationConfig()

const App: React.FC = () => {
  useEffect(() => {
    const lockPortraitScreen = () => {
      if (Orientation) {
        Orientation.lockToPortrait()
      }
    }

    lockPortraitScreen()
  }, [])

  return (
    <NavigationContainer ref={navigationRef}>
      <ModalGlobal />
      <Main />
    </NavigationContainer>
  )
}

export default App
