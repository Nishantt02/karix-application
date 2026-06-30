import { useState } from "react";
import api from "../api/api";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import ResponseCard from "../components/Responsecard";

const fieldLabels = {
    lastInsertedId: "Last Inserted ID",
    bot_id: "Bot ID",
    mobile_number: "Mobile Number",
    keyword: "Keyword",
    check_your_cibil_score: "Check Your CIBIL Score",
    get_cibil_alerts: "Get CIBIL Alerts",
    simulate_your_score: "Simulate Your Score",
    read_faq_cibil_score: "Read FAQ: CIBIL Score",
    read_faq_get_cibil_alerts: "Read FAQ: Get CIBIL Alerts",
    read_faq_simulate_your_score: "Read FAQ: Simulate Your Score",
};

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        lastInsertedId: "3",
        bot_id: "Wk6siw9Lnn2LGGEW",
        mobile_number: "917876767876",
        keyword: "Hi",
        check_your_cibil_score: "Test",
        get_cibil_alerts: "",
        simulate_your_score: "",
        read_faq_cibil_score: "",
        read_faq_get_cibil_alerts: "",
        read_faq_simulate_your_score: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResponse(null);

        try {
            const res = await api.post("/api/sebi/submit", {
                ProcessVariables: formData,
            });
            setResponse(res.data);
        } catch (err) {
            setError(err.response?.data || err.message || "Something went wrong");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
                    <div className="mb-8 space-y-3 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                            Karix API Demo
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            Send request data and inspect the response instantly.
                        </h1>
                        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            Fill the form below to submit variables to the backend, then review the JSON response and request preview in a polished dashboard layout.
                        </p>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-[1.25fr_0.95fr]">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900">Request form</h2>
                                    <p className="text-sm text-slate-500">Use the sample values or update any field before sending.</p>
                                </div>
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {loading ? "Submitting..." : "Ready to send"}
                                </span>
                            </div>

                            <form onSubmit={submitHandler} className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {Object.entries(formData).map(([key, value]) => (
                                        <InputField
                                            key={key}
                                            name={key}
                                            label={fieldLabels[key] ?? key}
                                            value={value}
                                            onChange={handleChange}
                                            placeholder={fieldLabels[key] ?? key}
                                        />
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-sm text-slate-500">
                                        The form sends a POST request to the backend endpoint with the entered process variables.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {loading && <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
                                        {loading ? "Submitting..." : "Submit request"}
                                    </button>
                                </div>
                            </form>

                            {error && (
                                <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 shadow-sm">
                                    {typeof error === "string" ? error : JSON.stringify(error)}
                                </div>
                            )}

                            {loading && <Loading />}
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <h2 className="text-lg font-semibold text-slate-900">Request preview</h2>
                                <p className="mt-2 text-sm text-slate-500">Review the exact payload that will be sent to the API.</p>
                                <pre className="mt-4 max-h-96 overflow-auto rounded-3xl bg-white p-4 text-sm leading-6 text-slate-700 shadow-inner">
{JSON.stringify({ ProcessVariables: formData }, null, 2)}
                                </pre>
                            </div>

                            {response && (
                                <ResponseCard response={response} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;