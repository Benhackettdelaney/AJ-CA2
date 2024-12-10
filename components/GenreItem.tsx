import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { GenreType } from '@/types';

interface MyProps {
    genre: GenreType;
}

export default function GenreItem({genre}: MyProps){
    return (
        <View style={styles.item}>
            <Link href={{
                pathname: '/genres/[id]',
                params: { id: genre._id }
            }}><Text>{genre.genreName}</Text></Link>
            <Text>{genre.movie_id}</Text>
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