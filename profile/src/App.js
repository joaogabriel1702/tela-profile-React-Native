import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/38577266?v=4';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel='João Pirata'
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //columns
    backgroundColor: colorGithub,
    flex: 1, //expande  para a tela inteira
    justifyContent: 'center',
  },

  content: {
    alignItems: 'center',
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});
