import Link from "next/link";

export const MainHeader = () => {
    return (
        <div
            id="header"
            className="sticky top-0 z-[100] h-24 border-b border-[#ffffff10] bg-[#ffffff05] p-3 backdrop-blur-sm"
        >
            <div id="header-center" className="mx-auto w-2/3">
                <Link
                    href="/"
                    className="float-left flex cursor-pointer items-end"
                >
                    <img
                        src="logo.png"
                        alt="Logo"
                        width="64px"
                        style={{ imageRendering: "pixelated" }}
                    />
                    <h1 className="text-5xl text-gray-50 transition-colors duration-300 ease-in-out hover:text-gray-300">
                        hri7566.info
                    </h1>
                </Link>
            </div>
        </div>
    );
};
