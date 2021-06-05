import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

export function DetailsScreen(props) {
  const [trailerkey, settrailerKey] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {img, detail, rating, vote, title, id} = props.route.params;

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    )
      .then(res => res.json())
      .then(res2 => {
        console.log('hgvjvghvfhchf\n\n\n', res2, '\n\n\ngfcjbhgchvjhvhf');
        settrailerKey(res2.results[0].key);
        setLoading(false);
      });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'mistyrose'}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.mainView}>
          <Text style={styles.movieTitle}>{title}</Text>
          <View style={styles.imgView}>
            <Image
              source={{uri: img}}
              style={{
                height: 500,
                width: '100%',
              }}
            />
          </View>
          <Text style={styles.details}>{detail}</Text>
          <View style={styles.buttonView}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    `https://www.youtube.com/watch?v=${trailerkey}`,
                  );
                }}
                disabled={loading}>
                <IconAnt name="playcircleo" size={40} color={'white'} />
              </TouchableOpacity>
              <Text style={styles.wtchTrailer}>Watch Trailer</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Review', {
                    id: id,
                  });
                }}>
                <IconAnt name="message1" size={40} color={'white'} />
              </TouchableOpacity>
              <Text style={styles.wtchTrailer}>See reviews</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    width: '100%',
    backgroundColor: 'grey',
  },
  movieTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 10,
  },
  imgView: {padding: 10, height: 500, width: '100%'},
  details: {padding: 20, fontSize: 16, color: 'white'},
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  wtchTrailer: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
});
