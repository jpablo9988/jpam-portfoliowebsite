import MainSideNav from "./parts/MainSideNav";

export default function SideHeader() {
    return (
        <header className="fixed top-0 left-0 h-screen overflow-hidden">
            <div className="hidden sm:grid grid-flow-row items-center w-35 h-full bg-sidebar ">
                <MainSideNav />
            </div>
        </header>
    )

}