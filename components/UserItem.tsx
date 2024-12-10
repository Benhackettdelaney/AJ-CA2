import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { UserType } from '@/types';

interface MyProps {
    user: UserType;
}

export default function UserItem({user}: MyProps){
    return (
        <View style={styles.item}>
            <Link href={{
                pathname: '/users/[id]',
                params: { id: user._id }
            }}><Text>{user.full_name}</Text></Link>
            <Text>{user.email}</Text>
            <Text>{user.password}</Text>
            <Text>{user.role}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eaeaea',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
      }
});