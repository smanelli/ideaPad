import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import {Button, Input} from 'react-native-elements'
import InnerSection from './inner-section'
import {authInputChange, login} from '../actions'
import {connect} from 'react-redux'
import IdeaPadForm from './ideapad-form'
import IdeaList from './idea-list'
import _ from 'loadsh'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      user: {},
      error: '',
      loading: false
      }
  }
  /*static getDerivedStateFromProps(props, state) {
    console.log(props.user)
    if(!_.isEmpty(props.user)) {
      this.props.navigation.navigate('App')
    }
    return null
  }
*/
  /*componentWillReceiveProps(nextProps) {
    console.log(nextProps.user)
    if(!_.isEmpty(nextProps.user)) {
      this.props.navigation.navigate('App')
    }
  }
*/
  onLogin = async () => {
    const {email, password} = this.props
    this.props.login({email, password})
  }

  showButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator size={'small'}/>
        </View>
      )
    }
    return (
      <Button title="Login" onPress={() => this.onLogin().then(this.props.navigation.navigate('App'))} buttonStyle={{ backgroundColor:'#3bd3d4' }} />
      )
  }

  showError() {
    if(this.props.error) {
      return (
        <Input disabled={true} inputStyle={{ color: 'red' }}>{this.props.error}</Input>
      )
    }
  }

  render() {
    return (
      <View>
        <InnerSection>
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Email'
            value={this.props.email}
            onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
          />
        </InnerSection>
        <InnerSection>  
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Password'
            secureTextEntry={true}
            value={this.props.password}
            onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text})}
          />
        {this.showError()}  
        </InnerSection>  
        {this.showButton()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password, 
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm)