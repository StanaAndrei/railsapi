Rails.application.routes.draw do
    #users
    get '/users/me', to: 'users#showMe'
    get '/users', to: 'users#index'
    post '/users', to: 'users#create'
    patch '/users/update', to: 'users#update'


    get '/items', to: 'items#index'
    #resources :users
    post '/auth/login', to: 'authentication#login'
    get '/*a', to: 'application#not_found'
   
end