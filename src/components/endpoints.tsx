const Endpoints = () => {
    return (
        <>
            <div className="w-[90vw] md:w-[80vw] lg:w-[65vw] bg-[#1E293B] pb-[5vh] pt-[7vh] px-[5vw] md:px-[3vw] text-white rounded-xl">

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-[#A5B4FC]">Endpoints</h1>

                {/* Generate Book Section */}
                <p className="text-lg md:text-xl font-bold text-[#A5B4FC] pt-[3vh]">Generate Book</p>
                <div className="flex flex-wrap gap-[2vw]">
                    <button className="bg-[#22d3ee] px-[4vw] md:px-[2vw] py-[1vh] rounded-lg mt-[1vh] text-[#0f172a] font-bold">POST</button>
                    <button className="bg-[#6366f1] px-[4vw] md:px-[2vw] py-[1vh] rounded-lg mt-[1vh] text-[#e2e8f0] font-bold">/api/generate-book</button>
                </div>

                {/* Request Body Section */}
                <p className="text-lg md:text-xl font-bold text-[#A5B4FC] pt-[5vh]">Request Body</p>
                <div className="overflow-x-auto">
                    <table className="w-full mt-[3vh] text-left">
                        <thead>
                            <tr className="bg-[#6366f1] p-5 rounded-t-xl">
                                <th className="py-3 px-5">PARAMETER</th>
                                <th className="py-3 px-5">TYPE</th>
                                <th className="py-3 px-5">DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-[#22d3ee] text-base md:text-lg">api</td>
                                <td className="py-3 px-5 text-base md:text-lg">string</td>
                                <td className="py-3 px-5 text-sm md:text-lg font-light">The API provider to use. Options: "openai" or "together"</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-[#22d3ee] text-base md:text-lg">model</td>
                                <td className="py-3 px-5 text-base md:text-lg">string</td>
                                <td className="py-3 px-5 text-sm md:text-lg font-light">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-[#22d3ee] text-base md:text-lg">topic</td>
                                <td className="py-3 px-5 text-base md:text-lg">string</td>
                                <td className="py-3 px-5 text-sm md:text-lg font-light">The main topic or theme of the book</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-[#22d3ee] text-base md:text-lg">language</td>
                                <td className="py-3 px-5 text-base md:text-lg">string</td>
                                <td className="py-3 px-5 text-sm md:text-lg font-light">The language in which the book should be generated</td>
                            </tr>
                            <tr className="border border-[#334155] rounded-b-xl">
                                <td className="py-3 px-5 text-[#22d3ee] text-base md:text-lg">word_count</td>
                                <td className="py-3 px-5 text-base md:text-lg">integer</td>
                                <td className="py-3 px-5 text-sm md:text-lg font-light">The approximate number of words for the generated book</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Response Section */}
                <p className="text-lg md:text-xl font-bold text-[#A5B4FC] pt-[5vh] pb-[2vh]">Response</p>
                <div className="border border-[#334155] p-[2vh] rounded-xl bg-[#0f172a]">
                    <pre className="text-sm">
                        <code className="block text-wrap">
                            <span className="block border-l border-b border-[#334155] pl-3 py-2">"message": "Book generation started",</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">"status": "processing",</span>
                            <span className="block pl-3 py-2">"job_id": "unique-job-identifier"</span>
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}

export default Endpoints;
