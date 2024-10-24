import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {RootStackParamList, ScreenProps} from './types/navigation';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/Notifications'; // Updated import name
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings'; // Ensure this matches the export



const Stack = createNativeStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fefefe',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'This App - Home',
        }} 
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen} // Updated component name
        options={{
          title: 'This App - Notifications',
        }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} // Updated component name
        options={{
          title: 'This App - Profile',
        }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} // Updated component name
        options={{
          title: 'This App - Settings',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
