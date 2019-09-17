import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]


export default class IdeaList extends Component {
    render() {
        return (
            <View containerStyle={{marginTop:0}}> 
                <ListItem
                    title={'dummy'}
                    leftIcon={{name: 'lightbulb-outline'}}
                    bottomDivider
                    chevron={true}
                />
                <ListItem
                    title={'dummy1 1'}
                    leftIcon={{ name: 'lightbulb-outline'}}
                    bottomDivider
                    chevron={true}
                />
                <ListItem
                    title={'dummy 2'}
                    leftIcon={{name: 'lightbulb-outline'}}
                    bottomDivider
                    chevron={true}
                />
                <ListItem
                    title={'dummy 3'}
                    leftIcon={{ name: 'lightbulb-outline' }}
                    bottomDivider
                    chevron={true}
                />                                
            </View>
        )
    }
}
