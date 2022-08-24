/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { initFoundationConfig } from './core/foundation';

import { Main } from './scenes/home';

initFoundationConfig();

const App: React.FC = () => {
  return <Main />;
};

export default App;
