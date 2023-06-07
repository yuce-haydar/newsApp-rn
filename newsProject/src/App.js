import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import News_data from './news_data.json';
import News_banner_data from './news_banner_data.json';
import NewsCard from './components/NewCards/NewsCard';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> News App🎉</Text>

      <FlatList
        ListHeaderComponent={()=>(
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {News_banner_data.map(bannerNews => (
            <Image
              key={bannerNews.id}
              source={{uri: bannerNews.imageUrl}}
              style={styles.banenrImage}></Image>
          ))}
        </ScrollView>
        )}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={News_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingStart: 10,
  },
  banenrImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});
