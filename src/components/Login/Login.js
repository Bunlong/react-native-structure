import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default class Login extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.messages}>
          The current scene is titled {this.props.title}
        </Text>
        <Button 
          onPress={this.props.loginWithDelay}
          title="Login" 
        />
        {this.props.onLogging && <Text>Logging In</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messages: {
    marginBottom: 20,
  },
})