import * as React from 'react';
import { Button, View, } from 'react-native';
import {styles} from '../Util/styles'
import {NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
  Settings: undefined;
};

type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

function HomeScreen({ navigation }: ScreenProps<'Home'>) {



  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />


    </View>
  );
};



export default HomeScreen;
