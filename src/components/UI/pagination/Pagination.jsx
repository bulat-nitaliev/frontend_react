import React from "react";
import { usePagination } from "../../../hooks/usePagination";


const Pagination = ({page, changePost, totalPage})=>{
    const resPage = usePagination(totalPage)
    return (
        <div 
            className="page__wrapper"
            
            >
                {resPage.map(p=>
                <span 
                onClick={()=>changePost(p)}
                key={p} 
                className={page===p ? 'page page__current':'page'}>
                    {p}
                </span>)}
            </div>
    )
}

export default Pagination