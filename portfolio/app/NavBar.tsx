export function NavBar() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "2% 5%"}}>
            <h1 className="text-3xl">
                Sparsh Inanda
            </h1>
            <div style={{display: "flex", justifyContent: "space-between", gap: "30px"}}>
                <button className="text-2xl cursor-pointer">home</button>
                <button className="text-2xl cursor-pointer">about</button>
                <button className="text-2xl cursor-pointer">projects</button>
            </div>
        </div>
    )
}