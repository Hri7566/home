import Link from "next/link";
import React from "react";

export const LinkBox = (
    props: React.PropsWithChildren & {
        title: string;
        href?: string;
        center?: true;
        color?: string;
    }
) => {
    return (
        <div
            className={`m-2 rounded-2xl bg-[#ffffff1a] px-4 py-4 shadow-md ring-1 ring-inset ring-[#ffffff1a] backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-[#ffffff20] ${
                props.center ? "items-center" : ""
            }`}
        >
            <div className="box-border border-0 border-solid">
                <h3 className="text-2xl font-bold text-neutral-300">
                    {props.href ? (
                        <Link
                            href={props.href}
                            className="text-emerald-400 transition-colors duration-300 ease-in-out hover:text-emerald-500"
                            style={{ color: props.color }}
                        >
                            {props.title}
                        </Link>
                    ) : (
                        props.title
                    )}
                </h3>
                <p className="text-neutral-300">{props.children}</p>
            </div>
        </div>
    );
};
