Rails.application.routes.draw do

  resources :projects, only: [:index, :create]
  resources :comments, only: [:index, :create, :destroy, :update]
  resources :users, only: [:index, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end




