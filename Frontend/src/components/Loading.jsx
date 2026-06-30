const Loading = () => {
    return (
        <div className="rounded-3xl bg-slate-50 p-5 text-center text-slate-600 shadow-sm" role="status" aria-live="polite">
            <div className="flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
            </div>
            <p className="mt-3 text-sm font-medium">Processing request, please wait…</p>
        </div>
    );
};

export default Loading;