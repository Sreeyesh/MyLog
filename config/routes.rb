Rails.application.routes.draw do
  root 'home#index'

  get 'account/sign_in'

  post '/save_activity' => 'home#save_activity'
  post '/delete_activity' => 'home#delete_activity'
  get '/chage_date' => 'home#chage_date'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
