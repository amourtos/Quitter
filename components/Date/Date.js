import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AppStyles from '../../styles/AppStyles';
import moment from 'moment';

export default props => {
  const [date, setDate] = useState(new Date());
  //   const [forceChange, setForceChange] = useState(0);

  //calculate difference between setDate and now
  //moment() === current time
  let startDate = moment();
  let timeEnd = moment(date);
  let diff = startDate.diff(timeEnd);
  let diffDuration = moment.duration(diff);

  const Timer = () => {
    return (
      <View style={AppStyles.DateContainer}>
        <Text style={AppStyles.Date}>Months: {diffDuration.months()}</Text>
        {diffDuration.days() < 0 ? (
          <Text style={AppStyles.Date}>Days: 0</Text>
        ) : (
          <Text style={AppStyles.Date}>Days: {diffDuration.days()}</Text>
        )}

        <Text style={AppStyles.Date}>Years: {diffDuration.years()}</Text>
      </View>
    );
  };

  useEffect(() => {
    // setForceChange(Math.random());
    // setDate(date);
  }, [date]);

  return (
    <View>
      <DatePicker mode="date" date={date} onDateChange={setDate} />
      <Text />
      <Timer />
    </View>
  );
};
