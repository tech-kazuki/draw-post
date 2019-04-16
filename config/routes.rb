Rails.application.routes.draw do
  root 'pictures#index'
  devise_for :users

  resources :users, only: [:show]
  resources :pictures, only: [:index, :show, :new, :create, :delete]
end
