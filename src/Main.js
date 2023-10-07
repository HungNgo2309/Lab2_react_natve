import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'project1', title: 'Project1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'project2', title: 'Project2', focusedIcon: 'Albums'},
    { key: 'project3', title: 'Project3', focusedIcon: 'Albums'},
    { key: 'project4', title: 'Project4', focusedIcon: 'Albums'},
    { key: 'project5', title: 'Project5', focusedIcon: 'Albums'},
    { key: 'project6', title: 'Project6', focusedIcon: 'Albums'},
    { key: 'project7', title: 'Project7', focusedIcon: 'Albums'},
    { key: 'project8', title: 'Project8', focusedIcon: 'Albums'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    project1: Project1,
    project2: Project2,
    project3: Project3,
    project4: Project4,
    project5: Project5,
    project6: Project6,
    project7: Project7,
    project8: Project8,
  });

  return (
    
    <SafeAreaProvider>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
  );
};

export default Main;