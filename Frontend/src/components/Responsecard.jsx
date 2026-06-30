const ResponseCard = ({ response }) => {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-slate-900">Response</h3>
                    <p className="text-sm text-slate-500">Results returned from the backend API.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                    {response?.status ? `HTTP ${response.status}` : "Response payload"}
                </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl bg-slate-50 p-4">
                <pre className="whitespace-pre-wrap text-sm leading-6 text-slate-700">{JSON.stringify(response, null, 2)}</pre>
            </div>
        </div>
    );
};

export default ResponseCard;