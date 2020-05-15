import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, Icon } from 'react-native-elements';
import HomeScreen from './src/screens/HomeScreen';
import client from './src/apollo-client/index';
import { ApolloProvider } from '@apollo/react-hooks';
import SearchScreen from './src/screens/SearchScreen';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import moment from 'moment';
import 'moment/locale/vi';
import { createStackNavigator } from '@react-navigation/stack';
import BookDescriptionScreen from './src/screens/BookDescriptionScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import AccountInfoScreen from './src/screens/AccountInfoScreen';
import LoginSignupScreen from './src/screens/LoginSignupScreen';
import BookScreen from './src/screens/BookScreen';
import AccountScreen from './src/screens/AccountScreen';
import CartScreen from './src/screens/CartScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import ReplyReviewScreen from './src/screens/ReplyReviewScreen';
import CreateReviewScreen from './src/screens/CreateReviewScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
moment.locale('vi');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let iconType;
        if (route.name === 'Trang chủ') {
          iconName = "home";
          iconType = "antdesign"
        } else if (route.name === 'Cá nhân') {
          iconName = "user";
          iconType = "feather";
        }
        else if (route.name === 'Sách') {
          iconName = "book";
          iconType = "feather";
        }
        else if (route.name === 'Tìm kiếm') {
          iconName = "search";
          iconType = "feather";
        } else if (route.name === 'Bán chạy') {
          iconName = "star";
          iconType = "feather";
        }

        // You can return any component that you like here!
        return <Icon name={iconName} type={iconType} size={20} color={color} />;
      },
    })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Sách" component={BookScreen}
        options={{ tabBarVisible: false }} />
      <Tab.Screen name="Tìm kiếm" component={SearchScreen} initialParams={{ focusInput: true }} />
      <Tab.Screen name="Bán chạy" component={SettingsScreen} />
      <Tab.Screen name="Cá nhân" component={AccountScreen} />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TabScreen" component={TabNav}
              options={{ headerShown: false }} />
            <Stack.Screen name="StackScreen" component={TabNav}
              options={{ headerShown: false }} />
            <Stack.Screen name="BookDetailScreen"
              options={{
                headerShown: false,
              }} component={BookDetailScreen} />
            <Stack.Screen name="BookDescriptionScreen"
              options={{
                headerShown: false,
              }} component={BookDescriptionScreen} />
            <Stack.Screen name="LoginSignupScreen" options={{
              headerShown: false,
            }} component={LoginSignupScreen} />
            <Stack.Screen name="AccountInfoScreen" options={{
              headerShown: false,
            }} component={AccountInfoScreen} />
            <Stack.Screen name="CartScreen" options={{
              headerShown: false,
            }} component={CartScreen} />
            <Stack.Screen name="ReviewScreen" options={{
              headerShown: false,
            }} component={ReviewScreen} />
            <Stack.Screen name="ReplyReviewScreen" options={{
              headerShown: false,
            }} component={ReplyReviewScreen} />
               <Stack.Screen name="CreateReviewScreen" options={{
              headerShown: false,
            }} component={CreateReviewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}