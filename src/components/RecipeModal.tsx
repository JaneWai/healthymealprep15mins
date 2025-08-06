import React from 'react'
import { X, Clock, Users, ChefHat, Heart, Star } from 'lucide-react'
import { Recipe } from '../types/Recipe'

interface RecipeModalProps {
  recipe: Recipe
  isOpen: boolean
  onClose: () => void
  isFavorite: boolean
  onToggleFavorite: () => void
}

const RecipeModal: React.FC<RecipeModalProps> = ({ 
  recipe, 
  isOpen, 
  onClose, 
  isFavorite, 
  onToggleFavorite 
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform backdrop-blur-md bg-white/95 shadow-2xl rounded-3xl border border-white/30">
          {/* Header */}
          <div className="relative">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Favorite Button */}
            <button
              onClick={onToggleFavorite}
              className="absolute top-4 right-16 p-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              <Heart 
                className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
              />
            </button>

            {/* Title and Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">{recipe.title}</h2>
              <p className="text-white/90 text-lg mb-4">{recipe.description}</p>
              
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{recipe.totalTime} min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">{recipe.servings} servings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-5 w-5" />
                  <span className="font-medium">{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 rounded-full border border-emerald-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Nutrition Facts */}
            <div className="backdrop-blur-md bg-white/30 rounded-2xl p-6 border border-white/40 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nutrition Facts (per serving)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{recipe.nutritionFacts.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{recipe.nutritionFacts.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{recipe.nutritionFacts.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{recipe.nutritionFacts.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{recipe.nutritionFacts.fiber}g</div>
                  <div className="text-sm text-gray-600">Fiber</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
                <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30">
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
                <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30">
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 pt-1">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeModal
