export interface Recipe {
  id: number
  title: string
  description: string
  prepTime: number
  cookTime: number
  totalTime: number
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  protein: string
  cookingMethod: string
  image: string
  ingredients: string[]
  instructions: string[]
  nutritionFacts: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
  tags: string[]
}
