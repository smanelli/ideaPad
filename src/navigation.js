import React from 'react'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import IdeaPadForm from './components/ideapad-form'
import IdeaList from './components/idea-list'
import LoginForm from './components/login-form'


const AuthStack = StackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
})

const AppStack = StackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: {
            headerTitle: 'Your ideas'
        }
    },
    AddIdeas: {
        screen: IdeaPadForm,
        navigationOptions: {
            headerTitle: 'Add your ideas'
        }
    }
})

export default SwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
)