const Splash = () => {
    return (
        <div
            className="animate-fade-out splash bg-background fixed top-0 left-0 z-50 flex h-svh w-svw items-center justify-center text-center"
            style={{ animationDelay: "2s" }}>
            <h1 className="flex gap-2 text-4xl font-bold text-white">
                Hey! <span className="animate-wave relative">👋</span>
            </h1>
        </div>
    );
};

export default Splash;
