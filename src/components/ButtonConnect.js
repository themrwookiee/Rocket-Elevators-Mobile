import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from './theme'

const ButtonConnect = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 20,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
  },
})

export default ButtonConnect
