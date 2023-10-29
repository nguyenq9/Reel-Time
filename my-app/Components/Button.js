import * as React from 'react';
import { IconButton, MD3Colors } from 'react-native-paper';

const Button = () => (
  <IconButton
    icon="camera"
    iconColor={MD3Colors.error50}
    size={20}
    onPress={() => console.log('Pressed')}
    style={{
      left: 20,
      bottom: 250
    }}
  />
);

export default Button;