import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ActorType } from '@/types';

interface MyProps {
    actor: ActorType;
}

export default function ActorItem({actor}: MyProps){
    return (
        <View style={styles.item}>
            <Link href={{
                pathname: '/actors/[id]',
                params: { id: actor._id }
            }}><Text>{actor.actorNames}</Text></Link>
            <Text>{actor.nationality}</Text>
            <Text>{actor.birthday}</Text>
            <Text>{actor.movie_id}</Text>
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