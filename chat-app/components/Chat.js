import { useEffect,useState } from 'react';
import { StyleSheet, View } from 'react-native';
// Imports Gifted Chat Library
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';


const Screen2 = ({ route, navigation, db }) => {
    // Extracting the 'name' and 'backgroundColor' from the route parameters
    const { name, backgroundColor, userID } = route.params;
    // Creating a state variable 'messages' and a function to update it using useState hook
    const [messages, setMessages] = useState([]);

    // Appending new messages to the existing messages in the state
    const onSend = (newMessages) => {
        // Adding a new message document to the Firestore collection
        addDoc(collection(db, "messages"), {
            createdAt: newMessages[0].createdAt,
            text: newMessages[0].text,
            user: newMessages[0].user,
        });
    };

    // Gifted Chat allows for message bubble customization
    const renderBubble = (props) => {
        // Customizing the appearance of the message bubbles based on sender (right or left)
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
        // Updating the title of the screen in the navigation options with the value of 'name'
        navigation.setOptions({ title: name});
        // Querying the "messages" collection in Firestore and ordering messages by createdAt field in descending order
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
        // Setting up a snapshot listener to listen for real-time changes to the "messages" collection
        const unsub = onSnapshot(q, (documentsSnapshot) => {
            // Create an array to store the new messages received from the database
            let newMessages = [];
            documentsSnapshot.forEach((doc) => {
                // Add each message to the newMessages array in the expected Gifted Chat format
                newMessages.push({ 
                    _id: doc.id, 
                    text: doc.data().text,
                    createdAt: doc.data().createdAt.toDate(),
                    user: doc.data().user, 
                });
            });
            // Update the state variable 'messages' with the newMessages array to display the messages in Gifted Chat
            setMessages(newMessages);
        });

        // Clean up the snapshot listener when the component unmounts
        return () => {
            if (unsub) unsub();
        }
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                onSend={(newMessages) => onSend(newMessages)}
                user={{
                    _id: userID,
                    name: name,
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