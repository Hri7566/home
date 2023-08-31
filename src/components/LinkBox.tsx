import Link from "next/link";
import React from "react";

function lightenColor(r: number, g: number, b: number) {
    const newR = r + 0x40;
    const newG = g + 0x40;
    const newB = b + 0x40;

    return {
        r: newR > 255 ? 255 : newR,
        g: newG > 255 ? 255 : newG,
        b: newB > 255 ? 255 : newB
    };
}

export const LinkBox = (
    props: React.PropsWithChildren & {
        title: string;
        href?: string;
        center?: true;
        color?: string;
    }
) => {
    const year = new Date().getUTCFullYear();
    const color = { r: 77, g: 255, b: 255 };

    switch (year) {
        case 2023:
            color.r = 0x8d;
            color.g = 0x3f;
            color.b = 0x50;
            break;
        case 2024:
            break;
        default:
            break;
    }

    const hoverColor = lightenColor(color.r, color.g, color.b);

    return (
        <div className="m-2 rounded-2xl bg-[#ffffff05] px-4 py-4 shadow-md ring-1 ring-inset ring-[#ffffff08] transition-colors duration-300 ease-in-out hover:bg-[#ffffff10]">
            <div className="box-border">
                <h3
                    className={`text-2xl font-bold text-neutral-300 ${
                        props.center ? "ml-auto mr-auto text-center" : ""
                    }`}
                    style={{ color: props.color }}
                >
                    {props.href ? (
                        <Link
                            href={props.href}
                            // className="text-emerald-400 transition-colors duration-300 ease-in-out hover:text-emerald-500"
                            className="text-sky-600 transition-colors duration-300 ease-in-out hover:text-sky-400 hover:underline"
                            style={{ color: props.color }}
                            // style={{
                            //     color: `rgb(${color.r}, ${color.g}, ${color.b})`
                            // }}
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
