export default function Button ({children}: {children: React.ReactNode}){
    return (
        <button className="flex items-center justify-center gap-2 font-display font-bold rounded-full text-[#0a0a0a] bg-white px-5 py-[0.58rem]">
            <span className="h-4 w-4 rounded-full bg-red-600"/>
            {children}
        </button>
    )
}