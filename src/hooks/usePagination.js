import { useMemo } from "react"



export const usePagination = (totalPage)=>{
    return useMemo(()=>{
        let resPage = []
        for (let index = 0; index < totalPage; index++) {
            resPage.push(index+1) 
            
        }
        return resPage
    },[totalPage])
     
}