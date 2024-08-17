import React from 'react';

import produtos from './data/produtos';

import { SafeAreaView,View,FlatList,StyleSheet,Text,Image,StatusBar,} from 'react-native';

import { List } from 'react-native-paper';

const Item = ({elemento: item}) => {
   return(
  <List.Item 
    title={item.titulo}
    description={item.description}
    // left={props => <List.Icon {...props} icon="folder" />}
    left={props => <Image {...props} style={styles.tinyLogo} source={{uri: item.url}}/>} 
  />
)};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({item}) => <Item elemento={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});

export default App;