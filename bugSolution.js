/* bug.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [deepLinkHandled, setDeepLinkHandled] = useState(false);

  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      console.log('Deep link opened:', url);
      setDeepLinkHandled(true);
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    return () => subscription.remove();
  }, []);

  const openDeepLink = async (url) => {
    const success = await Linking.openURL(url);
    if(success){
      console.log("Deep link opened successfully");
    }
    else {
      console.log("Error opening deep link");
    }
  };

  return (
    <View>
      <Button
        title="Open Deep Link 1"
        onPress={() => openDeepLink('https://www.example.com/link1')}
      />
      <Button
        title="Open Deep Link 2"
        onPress={() => openDeepLink('https://www.example.com/link2')}
      />
    </View>
  );
};

export default App;

/* bugSolution.js */
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [deepLinkHandled, setDeepLinkHandled] = useState(false);

  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      console.log('Deep link opened:', url);
      setDeepLinkHandled(true);
      setTimeout(() => {
        // Re-attach the event listener after a small delay
        Linking.addEventListener('url', handleDeepLink);
      }, 500); // Added delay
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);
    return () => subscription.remove();
  }, []);

  const openDeepLink = async (url) => {
    const success = await Linking.openURL(url);
    if(success){
      console.log("Deep link opened successfully");
    }
    else {
      console.log("Error opening deep link");
    }
  };

  return (
    <View>
      <Button
        title="Open Deep Link 1"
        onPress={() => openDeepLink('https://www.example.com/link1')}
      />
      <Button
        title="Open Deep Link 2"
        onPress={() => openDeepLink('https://www.example.com/link2')}
      />
    </View>
  );
};

export default App;