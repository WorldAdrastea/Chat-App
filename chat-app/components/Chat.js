import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Screen2 = ({ route, navigation }) => {
    // Extracting the 'name' and 'backgroundColor' from the route parameters
    const { name, backgroundColor } = route.params;

    // Updating the title of the screen in the navigation options with the value of 'name'
    useEffect(() => {
        console.log('Name:', name)
        navigation.setOptions({ title: name});
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text>Hello Welcome to the Chat!</Text>
        </View>
    );
}

//Stylesheet CSS
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
});

export default Screen2;