export default function Pagination() {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button 
                type="button"
                className="py-2 px-4 rounded-md bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Prev
            </button>
            <div className="flex items-center gap-2 text-sm">
                <button type="button" className="px-2 rounded-md bg-Sky">1</button>
                <button type="button" className="px-2 rounded-md">2</button>
                <button type="button" className="px-2 rounded-md">3</button>
                ...
                <button type="button" className="px-2 rounded-md">10</button>
            </div>
            <button 
                type="button"
                className="py-2 px-4 rounded-md bg-slate-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    )
}
