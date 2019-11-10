import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Login, Signup,Home,Post,Request,Notification,Setting,PostDetail,ShowNotification,RequestDatail} from './../../Screen'



const MainNavigator = createStackNavigator({
  Home:{screen:Home},
  Login: {screen: Login},
  Signup: {screen: Signup},
  Request: {screen: Request},
  Notification: {screen: Notification},
  Setting: {screen: Setting},
  Post: {screen: Post},
  PostDetail: {screen: PostDetail},
  RequestDatail: {screen: RequestDatail},
  ShowNotification: {screen: ShowNotification},
},

   
  )


const SatckNavigation = createAppContainer(MainNavigator);

export default SatckNavigation;