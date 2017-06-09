Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions
      resources :answers
      resources :users
    end
  end
end
