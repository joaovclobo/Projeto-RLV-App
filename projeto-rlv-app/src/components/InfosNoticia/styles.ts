import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      padding: 20,
  },
  image: {
      width: '100%',
      borderRadius: 20,
      marginBottom: 20,
  },
  content: {
      width: '100%',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: '#000',
  },
  description: {
      fontSize: 16,
      textAlign: 'justify',
      marginBottom: 20,
      color: '#000',
  },
  infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  infoText: {
      fontSize: 14,
      color: '#000',
  },
  button: {
      backgroundColor: '#8a5c36',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
  },
});

export default styles;
