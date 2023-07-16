import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
//Have to separate Image otherwise error comes up
import { Image } from 'react-native';

const Screen1 = ({ navigation }) => {
    // State variable declaration
    const [name, setName] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    return (
        //Sets BG Image
        <ImageBackground
            source={require('../assets/Background_Image.png')}
            style={styles.bgImage}
        >
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.title}>Chat</Text>
                </View>
                <View style={styles.container3}>
                    {/* Text input for user to enter name */}
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/icon.png')}
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                            placeholder='Your Name'
                        ></TextInput>
                    </View>
                    {/* Allows user to choose bg colour for when they get to Screen2 */}
                    <Text>Choose Background Colour</Text>
                    <View style={styles.colorBox}>
                        <TouchableOpacity
                            style={[styles.colorButton, { backgroundColor: "#090C08" }]}
                            onPress={() => setBackgroundColor("#090C08")}
                        />
                        <TouchableOpacity
                            style={[styles.colorButton, { backgroundColor: "#474056" }]}
                            onPress={() => setBackgroundColor("#474056")}
                        />
                        <TouchableOpacity
                            style={[styles.colorButton, { backgroundColor: "#8A95A5" }]}
                            onPress={() => setBackgroundColor("#8A95A5")}
                        />
                        <TouchableOpacity
                            style={[styles.colorButton, { backgroundColor: "#B9C6AE" }]}
                            onPress={() => setBackgroundColor("#B9C6AE")}
                        />
                    </View>
                    {/* Navigates user to Screen2 */}
                    <View style={styles.chatButton}>
                        <Button
                            accessible={true}
                            accessibilityLabel="Takes you to chat screen"
                            accessibilityHint="Takes you to the chat screen"
                            title="Start Chatting"
                            color="#FFFFFF"
                            onPress={() => navigation.navigate('Screen2', { name: name, backgroundColor: backgroundColor })}
                        />
                    </View>
                </View>
                { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
            </View>
        </ImageBackground>
    );
}

// Stylesheet CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '88%',
        fontWeight: 300
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '44%',
        width: '88%',
        backgroundColor: '#FFFFFF',
        marginTop: '40%',
        marginBottom: '20%'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        marginTop: 20
    },
    textInput: {
        flex: 1,
        height: 40,
        width: '88%',
        margin: 12,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
    },
    title: {
        fontSize: 45,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    box: {
        backgroundColor: 'white',
        width: 88,
        height: 44,
    },
    colorBox: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
    },
    colorButton: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3
    },
    chatButton: {
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: '#757083',
        padding: 10,
        marginBottom: '5%'
    },
    bgImage: {
        flex: 1
    },
    icon: {
        width: 20,
        height: 20,
        padding: 10,
        margin: 5,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});

export default Screen1;