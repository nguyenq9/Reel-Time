import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Linking } from 'react-native';

function FAQ(props) {
  const {
    properly = 'WA Fishing Reporting Guidelines',
    crab = 'WA Crab Report Guidelines',
    species = 'Species Identification Guide',
    help = 'Application Help',
    faq = 'FAQ',
  } = props;

  const openWebPage = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Error opening webpage:', err)
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() => openWebPage('https://www.eregulations.com/washington/fishing')}
        >
          <Text style={styles.text}>{properly}</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() => openWebPage('https://wdfw.wa.gov/licenses/fishing/catch-reporting#:~:text=After%20you%20catch%20a%20fish,220%2D310%2D010).')}
        >
          <Text style={styles.text}>{crab}</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() =>
            openWebPage('https://www.eregulations.com/washington/fishing/saltwater-fish-identification')
          }
        >
          <Text style={styles.text}>{species}</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() => openWebPage('https://github.com/nguyenq9/Reel-Time')}
        >
          <Text style={styles.text}>{help}</Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() => openWebPage('https://sites.google.com/view/reeltime')}
        >
          <Text style={styles.text}>{faq}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default FAQ;
