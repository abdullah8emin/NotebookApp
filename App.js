import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import BlogScreen from './screens/BlogScreen';
import { Provider } from './context/BlogContext';
import Feather from '@expo/vector-icons/Feather';
import EditScreen from './screens/EditScreen';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog App' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus-square" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                <FontAwesome6 name="edit" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
