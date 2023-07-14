import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Screen2 = ({ route, navigation }) => {
    const { name } = route.params;

    useEffect(() => {
        console.log('Name:', name)
        navigation.setOptions({ title: name});
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hello Welcome to the Chat!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
});

export default Screen2;