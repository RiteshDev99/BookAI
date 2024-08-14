const ApiPricing = () => {
    return (
        <>
            <div className="w-[90vw] md:w-[80vw] lg:w-[65vw] bg-[#1E293B] pb-[5vh] pt-[7vh] px-[5vw] md:px-[3vw] text-white rounded-xl">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-[#A5B4FC]">API Pricing</h1>

                {/* Description */}
                <p className="text-sm md:text-lg text-[#E2E8F0] pt-[2vh]">
                    Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                </p>

                {/* Pricing Table */}
                <div className="overflow-x-auto mt-[2vh]">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#6366f1] p-5 rounded-t-xl">
                                <th className="py-3 px-5">API</th>
                                <th className="py-3 px-5">Model</th>
                                <th className="py-3 px-5">Price per 1K tokens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-sm md:text-base">OpenAI</td>
                                <td className="py-3 px-5 text-sm md:text-base">GPT-3.5</td>
                                <td className="py-3 px-5 text-sm md:text-base">$0.002</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-sm md:text-base">OpenAI</td>
                                <td className="py-3 px-5 text-sm md:text-base">GPT-4</td>
                                <td className="py-3 px-5 text-sm md:text-base">$0.03</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-sm md:text-base">Together AI</td>
                                <td className="py-3 px-5 text-sm md:text-base">Llama-2-70b</td>
                                <td className="py-3 px-5 text-sm md:text-base">$0.0008</td>
                            </tr>
                            <tr className="border border-[#334155]">
                                <td className="py-3 px-5 text-sm md:text-base">Together AI</td>
                                <td className="py-3 px-5 text-sm md:text-base">Llama-2-13b</td>
                                <td className="py-3 px-5 text-sm md:text-base">$0.0006</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Token Estimation */}
                <p className="text-[#A5B4FC] pt-[3vh] text-lg md:text-xl font-bold">Token Estimation</p>
                <p className="text-sm md:text-base text-[#E2E8F0]">
                    On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our
                    <br /> token calculator tool.
                </p>

                {/* Billing Section */}
                <p className="text-[#A5B4FC] pt-[3vh] text-lg md:text-xl font-bold">Billing</p>
                <p className="text-sm md:text-base text-[#E2E8F0]">
                    You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly.
                    <br /> Detailed usage reports are available in your account dashboard.
                </p>
            </div>
        </>
    );
}

export default ApiPricing;
