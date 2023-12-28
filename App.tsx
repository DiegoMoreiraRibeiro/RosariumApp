import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

GoogleSignin.configure({});

function App(): React.JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = async () => {
    try {
      const user = await GoogleSignin.signIn();
      console.log(user);
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      setIsSignedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {isSignedIn ? (
        <>
          <Text>Usuário logado</Text>
          <Button title="Sair" onPress={handleLogout} />
        </>
      ) : (
        <GoogleSigninButton onPress={handleSignIn} />
      )}
    </View>
  );
}

export default App;
