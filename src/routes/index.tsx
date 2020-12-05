import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#1b1c26'},
      }}
      initialRouteName="List"
    />
  );
};

export default AuthRoutes;
