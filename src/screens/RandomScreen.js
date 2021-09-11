import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RandomScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Random Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    }
});

export default RandomScreen;