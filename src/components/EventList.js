import React from 'react';

import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

class EventList extends React.Component{
  static propTypes = {
    events: PropTypes.array.isRequired,
  };
  render() {
    return(
      <View style={styles.list}>
        {this.props.events.map((event) =>
          <Text key={event.key}>{ event.title }</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
});

export default EventList;
