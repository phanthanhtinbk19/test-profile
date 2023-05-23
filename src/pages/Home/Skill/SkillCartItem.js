import React from "react";



function SkillCartItem(props) {
    const {image} = props;
    return <div className="p-4 rounded-lg border-gray-500 bg-slate-100 dark:bg-gray-500 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
        <img src={image} alt="skills"/>
    </div>;
}

export default SkillCartItem;