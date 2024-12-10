export interface MovieType {
    _id: string;
    title: string;
    description: string;
    genre_id: string;
    actor_id: string;
    list_id: string;
    release_date: date;
    deleted: boolean;
}

export interface GenreType {
    _id: string;
    genreName: string;
    movie_id: string;
    deleted: boolean;
}

export interface ListType {
    _id: string;
    listName: string;
    movie_id: string;
    user_id: string;
    deleted: boolean;
}

export interface ActorType {
    _id: string;
    actorNames: string;
    nationality: string;
    birthday: date;
    movie_id: string;
    deleted: boolean;
}

export interface UserType {
    _id: string;
    full_name: string;
    email: string;
    password: string;
    role: string;
}



export interface IAuthContext {
    signIn: (token:string) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}

export type IResponseType = MovieType | GenreType | ListType | ActorType | UserType
