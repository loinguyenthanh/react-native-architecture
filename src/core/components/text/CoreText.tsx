import React from 'react';
import { Text, TextProps } from 'react-native-ui-lib';

type Props = TextProps;

const CoreText: React.FC<Props> = props => {
  return <Text {...props} />;
};

export default CoreText;
