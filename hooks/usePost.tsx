import axios from 'axios';
import {useState, useCallback} from 'react';
import { IResponseType } from '@/types';

export default function usePost(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState(null);

    const postRequest = useCallback((url:string,formData:object,headers:object,onSuccess:<T extends IResponseType>(data:T) => void ) => {
        setLoading(true);
        axios.post(url,formData,headers)
        .then(response => {
            setData(response.data)
            onSuccess(response.data);
        })
        .catch(e => {
            setError(e.response.data.message)
        })
        .finally(()=> {
            setLoading(false)
        })
    }, []);

    return {postRequest,data,loading,error}
}