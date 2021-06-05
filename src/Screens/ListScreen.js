import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function ListScreen(props) {
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1',
    )
      .then(res => res.json())
      .then(res2 => {
        setData(res2);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>List of Popular Movies</Text>
        <FlatList
          bounces={false}
          data={data.results}
          style={{}}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={styles.flatlistView}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity
                    style={{width: '100%', marginTop: 10}}
                    onPress={() => {
                      props.navigation.navigate('Detail', {
                        img: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                        detail: item.overview,
                        rating: item.vote_average,
                        vote: item.vote_count,
                        title: item.title,
                        id: item.id,
                      });
                    }}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                      }}
                      style={{
                        height: 500,
                        width: '100%',
                      }}
                    />
                  </TouchableOpacity>
                  <View style={styles.rtvoteView}>
                    <Text style={styles.rating}>
                      Rating: {item.vote_average}
                    </Text>
                    <Text style={styles.vote}>Vote: {item.vote_count}</Text>
                  </View>
                </View>
                <View style={styles.lineView}></View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'mistyrose',
  },
  heading: {marginVertical: 10, fontWeight: '500', fontSize: 25},
  flatlistView: {
    marginTop: 20,
    marginLeft: 20,
    width: '100%',
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: 'red',
    backgroundColor: 'grey',
  },
  title: {
    color: 'orange',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
  },
  rtvoteView: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'grey',
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    color: 'pink',
  },
  vote: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
    color: 'pink',
  },
  lineView: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
    color: 'pink',
  },
});
