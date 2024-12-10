import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { MovieType } from '@/types';

interface MyProps {
    movie: MovieType;
}

export default function MovieItem({movie}: MyProps){
    return (
        <View style={styles.item}>
            <Link href={{
                pathname: '/movies/[id]',
                params: { id: movie._id }
            }}><Text>{movie.title}</Text></Link>
            <Text>{movie.description}</Text>
            <Text>{movie.actor_id}</Text>
            <Text>{movie.genre_id}</Text>
            <Text>{movie.list_id}</Text>
            <Text>{movie.release_date}</Text>
            
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