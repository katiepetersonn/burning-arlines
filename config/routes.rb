Rails.application.routes.draw do
  root "airplanes#index"

  resources :airplanes
  resources :flights
  resources :reservations
  resources :users

end
