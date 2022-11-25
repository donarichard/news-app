import { instance } from "./axios"

export const getAllNews = ()=>{
    return instance.get('/news?access_key=4cb395bc8dbadacfbec5558910ab960f&languages=en').then(res=>{
        return res.data
    })
}