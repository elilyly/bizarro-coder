Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Users and Authentication
      resources :users do
        collection { get :me }
        resources :user_answers, only: [:create]
      end
      resources :auth
      post '/login', to: 'auth#sign_in'

      # Quizzes and Answers
      resources :quizzes, only: [:index] do
        resources :questions, only: [:index]
      end
    end
  end
end
