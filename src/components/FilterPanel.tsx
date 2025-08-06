import React from 'react'

interface FilterPanelProps {
  selectedProtein: string
  setSelectedProtein: (protein: string) => void
  selectedCookingMethod: string
  setCookingMethod: (method: string) => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedProtein,
  setSelectedProtein,
  selectedCookingMethod,
  setCookingMethod
}) => {
  const proteins = ['Chicken', 'Fish', 'Beef', 'Pork', 'Seafood', 'Turkey', 'Lamb']
  const cookingMethods = ['Grilling', 'Pan-Searing', 'Stir-Frying', 'Sautéing', 'Pan-Frying']

  return (
    <div className="mt-6 pt-6 border-t border-white/30">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Protein Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Protein Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedProtein('')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedProtein === '' 
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg' 
                  : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/50'
              }`}
            >
              All
            </button>
            {proteins.map((protein) => (
              <button
                key={protein}
                onClick={() => setSelectedProtein(protein === selectedProtein ? '' : protein)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedProtein === protein 
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg' 
                    : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/50'
                }`}
              >
                {protein}
              </button>
            ))}
          </div>
        </div>

        {/* Cooking Method Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Cooking Method</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCookingMethod('')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCookingMethod === '' 
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg' 
                  : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/50'
              }`}
            >
              All
            </button>
            {cookingMethods.map((method) => (
              <button
                key={method}
                onClick={() => setCookingMethod(method === selectedCookingMethod ? '' : method)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCookingMethod === method 
                    ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg' 
                    : 'bg-white/40 text-gray-700 hover:bg-white/60 border border-white/50'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
