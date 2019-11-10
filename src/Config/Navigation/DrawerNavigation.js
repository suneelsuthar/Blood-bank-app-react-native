import {DrawerNavigator} from 'react-navigation';


import {Post,Request,Notification} from './../../Screen'



export default DrawerNavigator({
    Post: {
      screen: Post
    },
    Request: {
      screen: Request
    },
    Notification: {
      screen: Notification
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: 300
  });