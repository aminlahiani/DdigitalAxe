import Input from "@/Components/Input";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function ServicesDevi({ services }) {
    return (
        <>
       
       {services.map((service ) => (
                          
                       
       
            <div key={service.id} className="flex col-span-6 sm:col-span-3 lg:col-span-2">
                <div className="flex items-center h-5">
                    <Input
                        type="checkbox"
                        name="postal_code"
                        id="postal_code"
                        // value={data.country}
                        // onChange={(e) =>
                        //     setData("country", e.target.value)
                        // }
                        value=""
                        handleChange=""
                        autoComplete="postal-code"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                    >
                       {service.name}
                    </label>
                </div>
            </div>
            ))}
          
        </>
    );
}
