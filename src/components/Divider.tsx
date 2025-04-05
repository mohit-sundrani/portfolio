const Divider = ({ className }: { className: string }) => {
    return (
        <div
            className={`from-primary to-background my-10 block h-0.5 w-full bg-radial to-70% opacity-50 ${className}`}></div>
    );
};

export default Divider;
