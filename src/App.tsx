import React, { useEffect } from 'react'
import Orientation from 'react-native-orientation-locker'

import { initFoundationConfig } from './core/foundation'

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

  return <Main />
}

export default App
