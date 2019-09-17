import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import {Button, Input} from 'react-native-elements'
import InnerSection from './inner-section'
import {ideaInputChange, createIdea} from '../actions'
import {connect} from 'react-redux'

class IdeaPadForm extends Component {
  constructor(props) {
    super(props);

  }
  
  create() {
    const {title, idea} = this.props
    this.props.createIdea({title, idea})
  }

  render() {
    
    return (
      <View>
        <InnerSection>
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Title'
            value={this.props.title}
            onChangeText={text => this.props.ideaInputChange({'field': 'title', 'value': text})}
          />
        </InnerSection>
        <InnerSection>  
          <Input
            style={{ borderColor: 'gray', borderWidth: 1 }}
            placeholder='Jot down your ideas here.'
            value={this.props.idea}
            onChangeText={text => this.props.ideaInputChange({'field': 'idea', 'value': text})}
            multiline={true}
            style={{height:200}}
          />
        </InnerSection>  
        <Button title="Submit" onPress={this.create.bind(this)} buttonStyle={{ backgroundColor:'#3bd3d4' }} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.ideaPadForm.title,
    idea: state.ideaPadForm.idea, 
  }
}

export default connect(mapStateToProps, {ideaInputChange, createIdea})(IdeaPadForm)