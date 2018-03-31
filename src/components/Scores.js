import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scores = ( props ) => (
    <View style={styles.container}>
        <View style={styles.panel}>
            <Text style={[styles.text, styles.labelPoints]} >Your Score</Text>
            <Text style={[styles.text, styles.points]} >{props.points}</Text>
            <Text style={[styles.text, styles.labelLevel]} >Level</Text>
            <Text style={[styles.text, styles.Level]} >{props.level}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: '100%',
        backgroundColor: '#222',
        paddingLeft: 20
    },
    panel: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
    },
    labelPoints: {
        width: 120,
    },
    points: {
        fontWeight: 'bold',
    },
    labelLevel: {
        position: 'absolute',
        right: 60,
    },
    Level: {
        fontWeight: 'bold',
        position: 'absolute',
        right: 30,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});


export default Scores
