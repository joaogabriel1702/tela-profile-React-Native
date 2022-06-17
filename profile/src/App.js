import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/38577266?v=4';
const urlToMyGithub = 'https://github.com/joaogabriel1702';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="João Pirata"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: João Gabriel"
          style={[style.defaultText, style.name]}>
          João Gabriel
        </Text>
        <Text
          accessibilityLabel="Nickname: joaogabriel1702"
          style={[style.defaultText, style.nickname]}>
          joaogabriel1702
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
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
    padding: 20,
  },

  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },

  defaultText: {
    color: colorFontGithub,
  },

  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },

  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,
  },

  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
