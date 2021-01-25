class UsersController < ApplicationController

    def show
 
    end

    def create
      # Create the user from params
      @user = User.new(user_params)
      if @user.save
        # Deliver the signup email
        UserNotifierMailer.send_signup_email(@user).deliver
        redirect_to(@user, :notice => 'User created')
      else
        render :action => 'new'
      end
    end
    
    def edit
    end
    
    def addpoints
      @user = current_user
      @user.winpoints += 10
      current_user.save

      redirect_to users_path(show)
  end

    
    def update
      @user.update(user_params)
      redirect_to user_path(@sports)
    end
    
    
    
    private
    
    def set_user
      @user = User.find(params[:id])
    end
  
    def user_params
      params.require(:user).permit(:username, :email, :full_name, :photo, :login)
    end
    
  end