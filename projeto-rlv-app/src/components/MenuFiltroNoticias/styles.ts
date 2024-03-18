import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#744c2448',
      backgroundColor: '#8a5c36',
      paddingHorizontal: 20,
      paddingVertical: 30,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#efcead',
      marginBottom: 20,
  },
  form: {
      width: '100%',
  },
  select: {
      backgroundColor: '#6b533c',
      color: '#ffffff',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
  },
  input: {
      backgroundColor: '#6b533c',
      color: '#ffffff',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
  },
  button: {
      backgroundColor: '#fcebdc',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginTop: 10,
  },
  buttonText: {
      color: '#6b533c',
      fontWeight: 'bold',
  },
});

export default styles;
