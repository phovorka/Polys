import * as React from "react";


const HowItWorks = () => {
   return (
    <div className="pt-10 pb-60  bg-purple-100 flex flex-col items-center justify-center">
   

      <div className="flex items-center space-x-4 mb-6">
        <h1 className="text-3xl font-bold ">User guide</h1>
      </div>
 <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why? Use query only once, search where you want.</h2>
          <p className="text-gray-700 mb-4">Google cannot search (index) everything, thats why manual search comes handy. Writing or copy pasting one query again and again is tiring. Thats why i created Polysearch. Searching on loved websites with one written query.  </p>
          <pre className="p-4 rounded-md">
          <img src="https://cdn.glitch.global/2222818e-a3bd-45a1-bab7-d9b34184a3e0/111.png?v=1727255059518" alt="Installation guide" className="w-full rounded-md" />
          </pre>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4"> Creating your own POLYSEARCH web</h2>
          <p className="text-gray-700 mb-4">After installation, open the configuration file located in the software directory and modify the necessary settings to fit your environment.</p>
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>{`{
  "setting1": "value1",
  "setting2": "value2"
}`}</code>
          </pre>
          
                  <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Step 3: Running the Software</h2>
          <p className="text-gray-700 mb-4">To start using the software, run the following command in your terminal:</p>
          <pre className="bg-gray-100 p-4 rounded-md">
            <code>my-software run</code>
          </pre>
        </section>
        </section>
        

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <p className="text-gray-700 mb-4">If you encounter any issues, visit our <a href="#" className="text-blue-500 underline">support page</a> or check the FAQ section in the documentation.</p>
        </section>
      </div>
      
    </div>
  );
};

export default HowItWorks;
