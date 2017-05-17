Rails.application.routes.draw do
  get 'pages/search'

  root "airplanes#index"

  resources :airplanes
  resources :flights
  resources :reservations
  resources :users

end
