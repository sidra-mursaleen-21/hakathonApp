import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../../layout';
import Navigatingbox from '../../components/navigatingBox';

const Add = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: 20, gap: 20, marginVertical: 30}}>
        <Navigatingbox
          pressed={() =>
            navigation.navigate('createTask', {title: 'Creat Task'})
          }
          text="Create Task"
          icon="arrow"
        />
        <Navigatingbox
          pressed={() =>
            navigation.navigate('createTeam', {title: 'Creat Team'})
          }
          text="create Team"
          icon="arrow"
        />
        <Navigatingbox text="Create Project" icon="arrow" />
        <Navigatingbox text="Send Invite" icon="arrow" />
      </View>
    </ScreenWrapper>
  );
};

export default Add;
