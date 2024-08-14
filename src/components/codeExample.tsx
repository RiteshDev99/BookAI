const CodeExample = () => {
    return (
        <>
            <div className="w-[90vw] md:w-[65vw] bg-[#1E293B] pb-[5vh] pt-[7vh] px-[2vw] text-white rounded-xl">
                <h1 className="text-3xl font-bold text-[#A5B4FC]">Code Example</h1>

                <p className="text-[#A5B4FC] pt-[4vh] text-lg font-bold">Python</p>
                <div className="w-full border border-[#334155] p-[2vh] rounded-xl">
                    <pre className="text-sm">
                        <code className="block text-wrap">
                            <span className="block border-l border-b border-[#334155] pl-3 py-2">import requests</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">API_KEY = "your_api_key_here"</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">API_ENDPOINT = "https://tryBookAI.com/api/generate-book"</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">headers = {"{"}</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"Content-Type": "application/json",</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"X-API-Key": API_KEY{"}"}</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">data = {"{"}</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"api": "openai",</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"model": "gpt-3.5-turbo",</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"topic": "The Future of Artificial Intelligence",</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"language": "English",</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">"word_count": 5000{"}"}</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">response = requests.post(API_ENDPOINT, json=data, headers=headers)</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">if response.status_code == 200:</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">result = response.json()</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">else:</span>
                        </code>
                    </pre>
                </div>

                <p className="text-[#A5B4FC] pt-[4vh] text-lg font-bold">JavaScript (Node.js)</p>
                <div className="w-full border border-[#334155] p-[2vh] rounded-xl">
                    <pre className="text-sm">
                        <code className="block text-wrap">
                            <span className="block border-l border-t border-b border-[#334155] pl-3 py-2">const axios = require('axios');</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">const API_KEY = 'your_api_key_here';</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">const headers = {"{"}</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">'Content-Type': 'application/json',</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">'X-API-Key': API_KEY{"}"}</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">const data = {"{"}</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">api: 'openai',</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">model: 'gpt-3.5-turbo',</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">topic: 'The Future of Artificial Intelligence',</span>
                            <span className="block border-b border-[#334155] pl-6 py-2">language: 'English'{"}"}</span>
                            <span className="block border-b border-[#334155] pl-3 py-2">axios.post(API_ENDPOINT, data, {"{"} headers {"}"})</span>
                            <span className="block pl-6 py-2">.catch(error =&gt; console.error('Error:', error.response ? error.response.data : error.message));</span>
                        </code>
                    </pre>
                </div>
            </div>
        </>
    );
}

export default CodeExample;
