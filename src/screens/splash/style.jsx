import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#8B78FF',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 34,
  },
  logo: {
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  heading: {
    fontSize: 37,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 45,
  },
  text: {
    color: '#8D8D8D',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 20,
  },

});

export default style;
