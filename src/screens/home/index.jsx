import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../layout';
import ScreenWrapper from '../../layout';
import ProjectCard from '../../components/projectCard';
import TaskProgressBox from '../../components/taskProgressBox';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [pressed, setPressed] = useState(false);
  const {colors} = useTheme();

  return (
    <ScreenWrapper>
      <View style={{paddingVertical: 20}}>
        <View style={{paddingHorizontal: 25}}>
          <Image
            style={{position: 'absolute', left: 25, top: -25}}
            source={require('../../images/dot-background.png')}
          />
          <Text
            style={{
              color: colors.heading,
              fontSize: 25,
              fontWeight: 600,
              lineHeight: 36,
              width: 210,
            }}>
            Let’s make a habits together 🙌
          </Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginTop: 25}}>
          <View
            style={{
              paddingHorizontal: 25,
              flexDirection: 'row',
              gap: 10,
            }}>
            <ProjectCard
              pressed={pressed}
              clicked={() => {
                setPressed(!pressed);
                navigation.navigate('todayTask', {title: 'Today Task'});
              }}
            />
            <ProjectCard />
          </View>
        </ScrollView>
        <Text
          style={{
            color: colors.heading,
            fontSize: 18,
            fontWeight: 600,
            marginVertical: 20,
            marginHorizontal: 25,
          }}>
          In Progress
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: 290, paddingBottom: 10}}>
          <View style={{marginHorizontal: 25, gap: 20}}>
            <TaskProgressBox
              pressed={() =>
                navigation.navigate('taskStatus', {title: 'Task Status'})
              }
            />
            <TaskProgressBox />
            <TaskProgressBox />
            <TaskProgressBox />
            <TaskProgressBox />
            <TaskProgressBox />
            <TaskProgressBox />
            <TaskProgressBox />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
