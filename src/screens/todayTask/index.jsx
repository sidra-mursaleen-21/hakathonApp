import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenWrapper from '../../layout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import Button from '../../components/button';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const TodayTask = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);
  const [monthName, setMonthName] = useState("")
  const {colors} = useTheme()

  const task = [
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
    {
      taskHeading: 'Design Team call',
      time: '01:20pm - 02:20pm',
    },
  ];

  useEffect(() => {
    daysInMonth();
  }, []);

  const daysInMonth = () => {

    const monthArray = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    monthArray.forEach((e, index) => {
      if (month == index) {
        setMonthName(e)
      }
    })

    var date = new Date(year, month, 1);
    var days = [];
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    while (date.getMonth() === month) {
      let dayName;
      day.forEach((element, index) => {
        if (index == new Date(date).getDay()) {
          dayName = element;
        }
      });
      days.push({ date: new Date(date).getDate(), day: dayName });
      date.setDate(date.getDate() + 1);
    }
    setDays(days);
  };

  return (
    <ScreenWrapper>
      <View style={{ paddingVertical: 30 }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{ position: 'absolute', bottom: -13 , left: 25}}
            source={require('../../images/dot-background.png')}
          />
          <View>
            <Text style={{ fontWeight: 600, fontSize: 25, color: colors.heading }}>
              {monthName}, {month + 1} 
            </Text>
            <Text style={{ fontWeight: 400, fontSize: 14, color: '#848A94' }}>
              15 task today
            </Text>
          </View>
          <View>
            <Pressable
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                // borderColor: '#E9F1FF',
                borderColor: '#E9F1FF',
              }}>
              <AntDesign color="#002055" size={20} name="left" />
            </Pressable>
          </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 25 }}>
          <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20 }}>
            {days.map((object, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 64,
                    height: 118,
                    borderRadius: 16,
                    borderWidth: object.date == new Date().getDate() ? null : 1,
                    backgroundColor:
                      object.date == new Date().getDate() ? '#756EF3' : null,
                    borderColor: colors.borderOutline,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color:
                        object.date == new Date().getDate()
                          ? '#fff'
                          : '#848A94',
                      fontWeight: 500,
                    }}>
                    {object.date}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color:
                        object.date == new Date().getDate()
                          ? '#fff'
                          : '#848A94',
                      fontWeight: 500,
                    }}>
                    {object.day}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView
        showsVerticalScrollIndicator={false}
          style={{ height: 370, marginVertical: 25, paddingHorizontal: 20 }}>
          <View style={{ gap: 20, position: 'relative' }}>
            {task.map((object, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: 253,
                    height: 78,
                    left: index % 2 == 0 ? 60 : null,
                    backgroundColor:
                      index % 3 == 0
                        ? '#63B4FF'
                        : index % 2 == 0
                          ? '#FFB35A'
                          : '#B1D199',
                    borderRadius: 16,
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    gap: 8,
                  }}>
                  <Text style={{ fontSize: 18, fontWeight: 500, color: '#fff' }}>
                    {object.taskHeading}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#fff',
                          width: 24,
                          height: 24,
                          borderRadius: 50,
                        }}></View>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: '#fff',
                          width: 24,
                          height: 24,
                          borderRadius: 50,
                        }}></View>
                    </View>
                    <Text
                      style={{ fontSize: 13, fontWeight: 400, color: '#fff' }}>
                      {object.time}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default TodayTask;
