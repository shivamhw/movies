import { drive_v3 } from "googleapis";
import axios from "axios";

const api = axios.create({
    baseURL: process.env.FOOGLE_API_URL,
    headers: {
        authorization: "Bearer "+ process.env.FOOGLE_API_KEY,
    },
  });
  
export class Foogle{
    private static instance: Foogle | null = null
    private constructor(){

    }
    public static getInstance() : Foogle {
        if(this.instance){
            return this.instance;
        }
        return new Foogle()
    }
    public async getMovies(params : MovieSearchQueryParams) {
        const { data } = await api.get<MovieSearchResponse>("/movies?" + new URLSearchParams(params).toString())
        return data;
    }
    public async getSeries(params : SeriesSearchQueryParams){
        const { data } = await api.get<MovieSearchResponse>("/series", {
            params:{
                name: params.name,
                season: params.season,
                episode: params.episode
            }
        })
        return data;
    }
}

export interface FoogleMovieResponse extends drive_v3.Schema$File{
    cf_worker_link?: string
    player_link?: string
}

export type MovieSearchQueryParams = {
    movie_name: string,
    movie_rel_year: string
}

export type MovieSearchResponse = {
    err  ?: string,
    msg : string
    data?: FoogleMovieResponse[] | [],
    len?: number
};

export type SeriesSearchQueryParams = {
    name : string,
    season ?: string,
    episode ?: string
}