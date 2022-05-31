Rails.application.routes.draw do
    #users
    get '/users/me', to: 'users#showMe'
    post '/users', to: 'users#create'
    patch '/users/update', to: 'users#update'
    resources :users, only: [:destroy, :index]


    get '/items', to: 'items#index'
    #resources :users
    post '/auth/login', to: 'authentication#login'
    get '/*a', to: 'application#not_found'
   
end