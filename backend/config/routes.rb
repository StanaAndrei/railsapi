Rails.application.routes.draw do

    #records
    get '/records/:uid', to: 'records#getRecsOfUser'
    post '/records', to: 'records#add'
    delete '/records/:id', to: 'records#destroy'
    patch '/records/:id', to: 'records#update'
    
    #users
    get '/users/me', to: 'users#showMe'
    post '/users', to: 'users#create'
    patch '/users/update', to: 'users#update'
    resources :users, only: [:destroy, :index, :show]


    get '/items', to: 'items#index'
    #resources :users
    post '/auth/login', to: 'authentication#login'
    get '/*a', to: 'application#not_found'
   

end