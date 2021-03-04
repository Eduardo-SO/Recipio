// import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Home from './src/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from './src/Dashboard'

const Tab = createBottomTabNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: { backgroundColor: '#222', padding: 20 }
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
