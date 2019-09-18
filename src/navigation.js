import React from 'react'
//import { StackNavigator, SwitchNavigator } from 'react-navigation'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IdeaPadForm from './components/ideapad-form'
import IdeaList from './components/idea-list'
import LoginForm from './components/login-form'
import { Icon } from 'react-native-elements'

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            headerTitle: 'Login'
        }
    }
})

const AppStack = createStackNavigator({
    Ideas: {
        screen: IdeaList,
        navigationOptions: ({navigation}) => {
            return {
                title: 'Your IdeaPad', 
                headerRight: (
                    <Icon 
                        type='evilicon'
                        name='plus'
                        size={30}
                        onPress={() => navigation.navigate('AddIdeas')}
                        iconStyle={{paddingRight: 10}}
                        />
                ),
                headerLeft: null
            }
        }
    },
    AddIdeas: {
        screen: IdeaPadForm,
        navigationOptions: {
            headerTitle: 'Add your ideas'
        }
    }
})

/*
createAppContainer(
    {
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
)
*/

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'Auth'
        }
    )
)

export default AppContainer