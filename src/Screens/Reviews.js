import * as React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

export function ReviewScreen(props) {
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const {id} = props.route.params;

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`,
    )
      .then(res => res.json())
      .then(res2 => {
        setContent(res2.results);
        setLoading(false);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'mistyrose'}}>
      <FlatList
        bounces={false}
        data={!loading ? content : null}
        renderItem={({item, index}) => {
          let url =
            item &&
            item.author_details &&
            item.author_details.avatar_path &&
            item.author_details.avatar_path.slice(1);
          return (
            <>
              <View style={styles.flatlistView}>
                <View style={styles.avatarView}>
                  <View style={styles.imgView}>
                    <Image
                      source={{uri: url}}
                      style={{
                        height: 70,
                        width: '100%',
                      }}
                    />
                  </View>
                  <View>
                    <Text style={styles.userName}>
                      {item.author_details.username}
                    </Text>
                    {item.author_details.rating && (
                      <Text style={styles.rating}>
                        Rating: {item.author_details.rating}
                      </Text>
                    )}
                  </View>
                </View>
                <View>
                  <Text style={styles.content}>{item.content}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistView: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'black',
  },
  avatarView: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  imgView: {
    width: '30%',
    height: 70,
    borderWidth: 1,
    marginRight: 20,
    backgroundColor: 'white',
  },
  userName: {fontSize: 14, fontWeight: '500', color: 'green'},
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: 'green',
  },
  content: {
    fontSize: 14,
    textAlign: 'left',
    color: 'darkorange',
  },
});
