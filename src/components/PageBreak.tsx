import React from "react";

export const PageBreak = (props: React.PropsWithChildren) => {
    return (
        <h1 className="my-3 border-b border-t border-[#ffffff10] bg-[#ffffff05] px-5 py-4 text-3xl shadow-lg backdrop-blur-sm">
            <div className="items-center text-center sm:ml-auto sm:mr-auto sm:w-2/3 sm:px-5">
                {props.children}
            </div>
        </h1>
    );
};
