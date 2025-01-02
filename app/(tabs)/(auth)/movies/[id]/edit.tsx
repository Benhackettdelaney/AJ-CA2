import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Button } from 'react-native';
import { useSession } from '@/context/AuthContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IResponseType, MovieType } from '@/types';
import useAPI from '@/hooks/useAPI' 

export default function Page() {
    const router = useRouter();
    const [movie, setMovie] = useState<MovieType | null>(null);
    const { session } = useSession();
    const { id } = useLocalSearchParams();

    const [form, setForm] = useState<MovieType>({
        _id: "",
        title: "",
        description: "",
        genre_id: "",
        actor_id: "",
        list_id: "",
        release_date: "",
        deleted: false
    });
    
    const { getRequest, putRequest, data, loading, error } = useAPI();


    useEffect(() => {
        getRequest(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                Authorization: `Bearer ${session}`
            }
        }, (data) => {
            setMovie(data as MovieType);
            setForm(data);
        })
    }, [id]);

    const handleChange = (e: any) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const handleSubmit = () => {
        console.log(form);
        putRequest(`https://aj-ca-1-nycs.vercel.app/api/movie/${id}`, form, {
            headers: {
                Authorization: `Bearer ${session}`
            }
        }, (data) => {
            router.push(`/movies/${data._id}`);
        });
    }

    if(loading === true) return <Text>Loading API...</Text>
    
    return (
        <>
            <Text>Title</Text>
            <TextInput
                style={styles.input}
                placeholder='Title'
                value={form.title}
                onChange={handleChange}
                id='title'
            />

            <Text>Description</Text>
            <TextInput
                style={styles.input}
                placeholder='Description'
                value={form.description}
                onChange={handleChange}
                id='description'
            />

            <Text>Genre</Text>
            <TextInput
                style={styles.input}
                placeholder='Genre'
                value={form.genre_id}
                onChange={handleChange}
                id='genre_id'
            />

            <Text>Actor</Text>
            <TextInput
                style={styles.input}
                placeholder='Actor'
                value={form.actor_id}
                onChange={handleChange}
                id='actor_id'
            />

            <Text>List</Text>
            <TextInput
                style={styles.input}
                placeholder='List'
                value={form.list_id}
                onChange={handleChange}
                id='list_id'
            />

            <Text>{error}</Text>
            <Button 
                onPress={handleSubmit}
                title="Submit"
                color="#841584"
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10
    }
});