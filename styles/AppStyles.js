import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  Header: {
    color: 'white',
    fontSize: 30,
  },
  DateContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Date: {
    color: 'white',
    fontSize: 20,
  },
});

export default AppStyles;
