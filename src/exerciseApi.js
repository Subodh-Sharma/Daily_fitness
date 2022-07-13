import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const exerciseApiHeaders = {
    'X-RapidAPI-Key': '4cef2cc819msh0d5ad7604a21532p1e387ejsn2820d11bf08c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const createRequest = (url)=>({url,headers:exerciseApiHeaders})

export const exerciseApi = createApi({
    reducerPath: "exerciseApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder)=>({
        getAllExercise: builder.query({
            query: ()=>createRequest("/exercises")
        }),
        getTargetMuscles: builder.query({
            query: ()=>createRequest("/exercises/targetList")
        }),
        getBodyParts: builder.query({
            query: ()=>createRequest("/exercises/bodyPartList")
        }),
        getExerciseByTargetMuscle: builder.query({
            query: (targetMuscle)=>createRequest(`/exercises/target/${targetMuscle}`)
        }),
        getExerciseByBodyPart: builder.query({
            query: (bodyPart)=>createRequest(`/exercises/bodyPart/${bodyPart}`)
        })
    })
})

export const {useGetAllExerciseQuery,useGetTargetMusclesQuery,useGetBodyPartsQuery,useGetExerciseByTargetMuscleQuery,useGetExerciseByBodyPartQuery} = exerciseApi;