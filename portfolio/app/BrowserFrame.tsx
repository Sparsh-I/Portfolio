interface BrowserFrameProps {
    link: string
}

export function BrowserFrame({ link }: BrowserFrameProps) {
    return (
        <div>
            <div className="flex flex-row gap-1 p-2 bg-[#543382] rounded-t-2xl">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <img className="w-full h-full rounded-b-2xl align-end" src={link}/>
        </div>
    );
}