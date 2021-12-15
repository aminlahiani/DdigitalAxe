/* This example requires Tailwind CSS v2.0+ */
const people = [
  
  {
    name: 'Developpement web',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Developpeur',
    nom1 : "amin lahiani",
    nom2 : "foued  abid",
    nom3 : "hedi  abid",
    prix: '100',
    phone : "+216 25129708",
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
 project: "developpeme site web pour  manelopc"
    },
  {
    name: 'Developemment Mobile',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'designer',
    nom1 : "amin lahiani",
    nom2 : "foued  abid",
    nom3 : "hedi  abid",
    prix: '200',
    phone : "+216 25129708",
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      project: "developpeme site web pour  manelopc"
    },



  // More people...
]

export default function ServicesTable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                     nom de Service
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Prix
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Statut
                  </th>
                    <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Employee
                  </th>
                
                 
                 <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.prix}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                         
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.prix} DTN</div>
                
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Disponible
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                      <div className="text-sm text-gray-500">{person.nom1}</div>
                      <div className="text-sm text-gray-500">{person.nom2}</div>
                      <div className="text-sm text-gray-500">{person.nom3}</div>
                    </td>
                  
                

                    
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
