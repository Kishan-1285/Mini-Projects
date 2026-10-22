const StatCard = ({ title, fields }) => {
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="text-sm text-slate-500">{title}</h2>
            <p className="mt-2 text-2xl font-bold text-slate-900">
                {fields}
            </p>
        </div>
    )
}
export default StatCard