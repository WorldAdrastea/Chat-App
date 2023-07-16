import { useEffect,useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Imports Gifted Chat Library
import { Bubble, GiftedChat } from "react-native-gifted-chat";


const Screen2 = ({ route, navigation }) => {
    // Extracting the 'name' and 'backgroundColor' from the route parameters
    const { name, backgroundColor } = route.params;
    // Creating a state variable 'messages' and a function to update it using useState hook
    const [messages, setMessages] = useState([]);

    // Appending new messages to the existing messages in the state
    const onSend = (newMessages) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    }

    // Gifted Chat allows for message bubble customization
    const renderBubble = (props) => {
        return <Bubble
        {...props}
        wrapperStyle={{
            right: {
            backgroundColor: "#55EEEE"
            },
            left: {
            backgroundColor: "#B330EE"
            }
        }}
        />
    }

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Welcome To the Chat",
                createdAt: new Date(),
                user: {
                _id: 2,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any",
                },
            },
            {
                _id: 2,
                text: 'This is a system message',
                createdAt: new Date(),
                system: true,
            },
        ]);
    }, []);

    // Updating the title of the screen in the navigation options with the value of 'name'
    useEffect(() => {
        navigation.setOptions({ title: name});
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1
                }}
            />
            { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="padding" /> : null }
        </View>
    );
}

//Stylesheet CSS
const styles = StyleSheet.create({
    container: {
    flex: 1,
    }
});

export default Screen2;