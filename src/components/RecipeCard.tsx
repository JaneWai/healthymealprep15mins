import React from 'react'
import { Clock, Users, Star, Heart } from 'lucide-react'
import { Recipe } from '../types/Recipe'

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onToggleFavorite: () => void
  onClick: () => void
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isFavorite, onToggleFavorite, onClick }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite()
  }

  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer backdrop-blur-md bg-white/20 rounded-2xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </button>

        {/* Difficulty Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/30 ${
            recipe.difficulty === 'Easy' ? 'bg-green-400/80 text-white' :
            recipe.difficulty === 'Medium' ? 'bg-yellow-400/80 text-white' :
            'bg-red-400/80 text-white'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Time Badge */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 backdrop-blur-sm bg-black/30 rounded-full px-3 py-1">
          <Clock className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-medium">{recipe.totalTime} min</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="h-4 w-4" />
            <span className="text-sm">{recipe.servings} servings</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <span className="text-sm font-medium">{recipe.nutritionFacts.calories} cal</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 rounded-full border border-emerald-200"
            >
              {tag}
            </span>
          ))}
          {recipe.tags.length > 2 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              +{recipe.tags.length - 2} more
            </span>
          )}
        </div>

        {/* Protein and Method */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-medium">{recipe.protein}</span>
          <span>{recipe.cookingMethod}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
