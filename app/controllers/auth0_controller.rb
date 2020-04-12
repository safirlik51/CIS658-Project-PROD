class Auth0Controller < ApplicationController
    # Set session[:userinfo] when authentication succeeds
  def callback
    session[:userinfo] = request.env['omniauth.auth']

    redirect_to '/dashboard'
  end

  def logout
    reset_session
    redirect_to root_path
  end
  # Render failure when something goes wrong.
  def failure
  end
end
