class UsersController < ApplicationController
    before_action :authorize_request, except: %i[create]
    before_action :find_user, only: %i[destroy show]
  
    # GET /users
    def index
        @users = User.all
        render json: @users, status: :ok
    end
  
    def showMe
        render json: @current_user, status: :ok
    end

    # GET /users/{id}
    def show
        render json: @user, status: :ok
    end
  
    # POST /users
    def create
        @user = User.new(user_params)
        if @user.save
            jwt = JsonWebToken.encode(user_id: @user.id)
            time = Time.now + 24.hours.to_i
            render json: { jwt: jwt, exp: time.strftime("%m-%d-%Y %H:%M"),
                            id: @user.id }, status: :ok
        else
            render json: { errors: @user.errors.full_messages },
                status: :unprocessable_entity
        end
    end
  
    # PATCH /users/:id
    def update
        if @current_user.id == params[:id].to_i
            if @current_user.update(user_params)
                render status: :ok
                return
            end
        end

        if @current_user.admin or @current_user.manager
            user = User.find_by!(id: params[:id])
            if user.update(user_params)
                render status: :ok
            end
        end

    end
  
    # DELETE /users/{username}
    def destroy
        if @current_user.manager or @current_user.admin or @current_user.id == @user.id
            @user.destroy!
            render status: :ok
        end
    end
    
    private
  
        def find_user
            @user = User.find_by!(id: params[:id])
            rescue ActiveRecord::RecordNotFound
                render json: { errors: 'User not found' }, status: :not_found
        end
    
        def user_params
            params.permit(
                :username, :email, :password, :password_confirmation
            )
        end
end