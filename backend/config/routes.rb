Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :show]
      resources :answers, only: [:index, :show]
      resources :users
      resources :user_answers, only: [:index, :show, :update]
      resources :quizzes, only: [:index, :show, :destroy]
    end
  end
end
