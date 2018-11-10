import React, {Component} from 'react';
import { Container, Header, Content, Thumbnail, Text, Button } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Home extends React.Component {
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
            >
              <Text>Start</Text>
            </Button>
          </Content>
        </Container>
  )
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