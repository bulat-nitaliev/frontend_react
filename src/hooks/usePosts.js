import { useMemo } from "react";

export const useSortedPosts = (sort, posts)=>{
    const sortedPosts = useMemo(() => {
        console.log("Отработала getSortedPosts");

        if (sort) {
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort])
            );
        } else {
            return posts;
        }
    }, [sort, posts]);
    return sortedPosts
}

export const usePosts = (sort, query, posts)=>{
    const sortedPosts = useSortedPosts(sort,posts)
    const sortAndSearchPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(query)
        );
    }, [query, sortedPosts]);
    return sortAndSearchPosts
}