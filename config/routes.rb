Rails.application.routes.draw do
  resources :packages do
    post '/scrape', to: 'packages#scrape', on: :collection
  end
  root 'home#index'

  get 'dashboard' => 'packages#index'
  get '/logout' => 'auth0#logout'
  get 'auth/auth0', as: 'authentication'
  get 'auth/auth0/callback' => 'auth0#callback'
  get 'auth/failure' => 'auth0#failure'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
