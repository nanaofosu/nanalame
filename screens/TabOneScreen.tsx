import *as React from 'react';
import { AppRegistry, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState, useEffect, Component } from 'react';
import Nugget from '../components/Nugget'

export default class TabOneScreen extends Component {

  state = {
    nuggets: [],
    loading: false
  }
  componentDidMount = () => {
    this.setState({ loading: true })
    fetch('https://s5f26875f62f33kkydxbzqs8.devcloud.acquia-sites.com/wall')
      .then(nuggets => nuggets.json())
      .then(nuggets => this.setState({ nuggets, loading: false }));
  }

  // Similar to componentDidMount and componentDidUpdate:

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.state.nuggets.map((nugget: { id: any; title: string; body: string; imageUrl: string; topic: any; uid: string; date: any; profilePicUrl: string; firstName: string; lastName: string; }, i: any) =>
            <Nugget
              key={nugget.id}
              title={nugget.title}
              body={nugget.body}
              imageUrl={nugget.imageUrl}
              topic={nugget.topic}
              id={nugget.id}
              uid={nugget.uid}
              date={nugget.date}
              profilePicUrl={nugget.profilePicUrl}
              firstName={nugget.firstName}
              lastName={nugget.lastName}
            />

          )}

          {/* <Text style={styles.title}>Tab One </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1
  },
  feedItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    height: 200

  },
  leftCol: {

  },
  rightCol: {
    maxWidth: '80%'
  },
  nameRow: {},
  postImage: {
    maxWidth: 350
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },
  logo: {
    width: 66,
    height: 58,
  },
});
