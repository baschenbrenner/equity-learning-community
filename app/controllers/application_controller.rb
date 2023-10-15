class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize

    private

    def authorize
        
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
        @current_user = User.find_by(id: session[:user_id])
    end
end
