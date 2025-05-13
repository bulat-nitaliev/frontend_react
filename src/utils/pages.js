export const totalPages = (totalCount, limit)=>{
    const result = Math.ceil(totalCount/limit)
    return result
}