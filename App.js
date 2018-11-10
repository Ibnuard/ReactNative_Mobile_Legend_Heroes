import React from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Button } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Heroes from './Components/Heroes';
import Settings from './Components/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  render(){
    return(
        <Container style={{justifyContent: 'center', alignSelf : 'center'}}>
          <Content>
            <Thumbnail large source={{uri: 'https://4.bp.blogspot.com/-XvS5CPUQS1Q/WuPyXz5zWQI/AAAAAAAANdQ/y2B11qhhXK85DzSqatMUQx7rdQAkGwRKgCLcBGAs/s1600/Mobile%2BLegend.png'}}
            style={{alignItems: 'center', width:350, height: 250}} />
            <Text style={nbStyles.subtitle}>
              Welcome to Mobile Legends
            </Text>
            <Text style={nbStyles.subtitle}>
              Heroes Dictionary
            </Text>
            <Text style={nbStyles.subtitle}>
              Start Exploring/Creating
            </Text>
            <Text style={nbStyles.subtitle}>
              Your Favourites heroes
            </Text>
            <Button block style={nbStyles.btn}
            onPress={() => this.props.navigation.navigate('Heroes')} 
            >
              <Text>Start</Text>
            </Button>
          </Content>
        </Container>
  )
}
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={20}/>
          )
        }),
      },
      Heroes: {
        screen: Heroes,
        navigationOptions: ({ navigation }) => ({
          title: 'Heroes',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={20}/>
          )
        }),
      },
      Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
          title: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="gear" size={20}/>
          )
        }),
      },
    }),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('otherParam', 'Mobile Legend Dictionary'),
    }),
  },
    Heroes: Heroes,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const nbStyles = {
  subtitle:{
    fontSize: 24,
    textAlign:'center',
    color:'#ACD2FA',
  },
  btn:{
    marginTop: 24,
    width: 300,
    alignSelf: 'center',
  }
}