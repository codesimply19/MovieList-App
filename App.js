import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListScreen} from './src/Screens/ListScreen';
import {DetailsScreen} from './src/Screens/details';
import {ReviewScreen} from './src/Screens/Reviews';

function HomeScreen(props) {
  const image = {
    uri: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80',
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={image} style={styles.img}>
        <View style={styles.welcome}>
          <Text style={styles.welText}>Welcome!</Text>
          <Text style={styles.txt}>
            Here you can find the most popular movies of all the time
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('List');
          }}>
          <View style={styles.btnView}>
            <Text style={styles.btnTxt}>Go to Movie List</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />

        <Stack.Screen
          name="Review"
          component={ReviewScreen}
          options={{
            headerStyle: {
              backgroundColor: 'orange',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  welcome: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welText: {color: 'orange', fontSize: 50, fontWeight: '500'},
  txt: {color: 'pink', fontSize: 22, fontWeight: '300'},
  btnView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'pink',
    marginTop: 70,
    padding: 10,
  },
  btnTxt: {color: 'black', fontSize: 25, fontWeight: '500'},
  img: {
    flex: 1,
    resizeMode: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
export default App;
