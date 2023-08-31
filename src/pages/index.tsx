import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MainHeader } from "~/components/MainHeader";
import { LinkBox } from "~/components/LinkBox";
import { PageBreak } from "~/components/PageBreak";
import { Footer } from "~/components/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>hri7566.info</title>
                <meta name="description" content="i make stuff" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className="text-white sm:w-full"
                style={{
                    fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif`
                }}
            >
                <div className=" absolute inset-0 -z-10 min-h-screen w-full overflow-y-auto bg-[#00000070]" />

                <MainHeader />

                <PageBreak>Links</PageBreak>
                <div className="sm:ml-auto sm:mr-auto sm:w-2/3 sm:items-center">
                    <div
                        id="links"
                        className="mx-5 my-3 grid grid-cols-1 items-center justify-evenly sm:flex"
                    >
                        <LinkBox
                            title="GitHub"
                            href="https://github.com/Hri7566"
                            center
                            // color="#ffffff"
                        />
                        <LinkBox
                            title="GitLab"
                            href="https://gitlab.com/Hri7566"
                            center
                            // color="#ffffff"
                        />
                        <LinkBox
                            title="Twitter"
                            href="https://twitter.com/Hri7566"
                            center
                            // color="#ffffff"
                        />
                        <LinkBox
                            title="YouTube"
                            href="https://youtube.com/hri7566"
                            center
                            // color="#ffffff"
                        />
                        <LinkBox
                            title="Odysee"
                            href="https://odysee.com/@hri7566:6"
                            center
                            // color="#ffffff"
                        />
                    </div>
                </div>

                <PageBreak>Projects</PageBreak>
                <div className="sm:ml-auto sm:mr-auto sm:w-2/3">
                    <div
                        id="projects"
                        className="mx-5 my-3 grid grid-cols-1 pb-20 sm:grid-cols-2"
                    >
                        <LinkBox
                            title="mpp-user-archive"
                            href="https://github.com/Hri7566/mpp-user-archive"
                        >
                            Multiplayer Piano database service monorepo. This
                            project took over a month to make.
                        </LinkBox>
                        <LinkBox
                            title="Cosmic"
                            href="https://github.com/Hri7566/cosmic"
                            // color="#1d0054"
                        >
                            Bot for Discord and MPP. Lots of baking involved.
                        </LinkBox>
                        <LinkBox
                            title="mpp.hri7566.info"
                            href="https://mpp.hri7566.info"
                            // color="#8d3f50"
                        >
                            A clone of Multiplayer Piano with a completely
                            original backend server with a fresh style.
                        </LinkBox>
                        {/* <LinkBox title="Khorne Bot" color="#900000">
                            Discord bot in collaboration with Khorne. Closed
                            source and currently under development.
                        </LinkBox> */}
                        <LinkBox
                            title="MPPClone Frontend"
                            href="https://github.com/LapisHusky/mppclone"
                        >
                            I made some contributions to this site, such as the
                            ability to hide cursors.
                        </LinkBox>
                        {/* <LinkBox
                            title="Super Mario 64 in a Browser"
                            href="https://mario.hri7566.info"
                        >
                            Mirror of BopItFreak's Mario site. Give it a minute
                            to load. Audio doesn't like to work sometimes.
                        </LinkBox> */}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
};

export default Home;
