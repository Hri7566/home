import React from "react";

export const PageBreak = (props: React.PropsWithChildren) => {
    return (
        <h1 className="my-3 border-b border-t border-[#ffffff1a] bg-[#ffffff1a] px-5 py-4 text-3xl shadow-lg backdrop-blur-sm">
            <div className="items-center text-center sm:ml-auto sm:mr-auto sm:w-2/3 sm:px-5">
                {props.children}
            </div>
        </h1>
    );
};
