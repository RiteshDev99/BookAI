const Tutorial = () => {
    return (
        <div className="max-w-[90vw] md:w-[80vw] lg:w-[65vw] bg-[#1E293B] pb-8 pt-12 px-6 md:px-8 text-white rounded-xl">
            <h1 className="text-3xl font-bold text-[#A5B4FC]">Tutorial</h1>

            <div className="mt-8">
                <h2 className="text-2xl md:text-xl text-[#A5B4FC] font-bold">Step 1: Obtain an API Key</h2>
                <p className="text-base mt-2">Generate an API key using the button in the Authentication section above.</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl md:text-xl text-[#A5B4FC] font-bold">Step 2: Make a Request</h2>
                <p className="text-base mt-2">Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl md:text-xl text-[#A5B4FC] font-bold">Step 3: Handle the Response</h2>
                <p className="text-base mt-2">The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl md:text-xl text-[#A5B4FC] font-bold">Step 4: Retrieve the Generated Book</h2>
                <p className="text-base mt-2">Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
            </div>
        </div>
    )
}

export default Tutorial;
