import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import ajax from '../ajax';
import EventList from './EventList'

class App extends React.Component {
  state = {
    events: [],
  }
  async componentDidMount(){
    const events = await ajax.fetchInitialEvents();
    this.setState({ events });
  }
  render() {
    return(
      <View style={styles.container}>
        {this.state.events.length > 0 ? (
          <EventList events={this.state.events} />
        ) : (
          <Text style={styles.header}>rcc</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  }
});

export default App;
