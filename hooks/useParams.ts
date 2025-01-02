import { useLocalSearchParams } from 'expo-router';

export const useParams = () => {
  const params = useLocalSearchParams();
  return params;
};