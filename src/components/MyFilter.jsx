import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const MyFilter = ({filter ,setFilter})=>{
    return (
        <div className="flter">
            <MyInput
                placeholder={"Поиск ..."}
                value={filter.query}
                onChange={(e) => setFilter({...filter, query:e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectPost=> setFilter({...filter, sort:selectPost})}
                defaultValue={"Сортировка по"}
                options={[
                    { value: "title", name: "Сортировка по заголовку" },
                    { value: "body", name: "Сортировка по содержимому" },
                ]}
            />

        </div>
        
    )
}

export default MyFilter