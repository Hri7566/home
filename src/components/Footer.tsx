export const Footer = () => {
    const currentYear = new Date().getUTCFullYear();

    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-[#ffffff10] bg-[#ffffff05] p-4 text-lg">
            &copy; Hri7566 {currentYear} All rights reserved
        </footer>
    );
};
