const Authentication = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-[#1E293B] rounded-xl shadow-md p-8 text-white leading-6">
                <h1 className="text-3xl font-bold text-[#A5B4FC] mb-4">Authentication</h1>
                <p className="text-lg text-[#E2E8F0] mb-4">
                    To use the API, you need to include your API key in the header of each
                    request:
                </p>
                <div className="flex items-center mb-4">
                    <div className="bg-[#334155] rounded-lg p-2 mr-4">
                        <p className="text-sm">X-API-Key: YOUR_API_KEY</p>
                    </div>
                </div>
                <p className="text-lg text-[#E2E8F0] mb-4">
                    To generate an API key, use the button below:
                </p>
                <button className="bg-[#22d3ee] px-4 py-2 rounded-lg text-[#0f172a] font-bold hover:bg-[#1da0c7] transition duration-300 ease-in-out">
                    Generate API Key
                </button>
                <hr className="border-[#334155] mt-8" />
            </div>
        </div>
    );
};

export default Authentication;