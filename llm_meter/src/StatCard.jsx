const StatCard = ({ title, fields,details }) => {
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm rounded-xl bg-slate-900 border border-slate-800 p-5">
            <h2 className="text-sm text-slate-500">{title}</h2>
            <p className="mt-2 text-2xl font-bold text-slate-900">
                {fields}
            </p>
            <p className="mt-1 text-xs text-slate-500">
                {details}
            </p>
        </div>
    )
}
export default StatCard