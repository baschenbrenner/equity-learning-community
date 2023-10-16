class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

    private

    def authorize
        
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
        @current_user = User.find_by(id: session[:user_id])
    end

    def unprocessable_entity(invalid)
        render json: {  errors: invalid.record.errors.full_messages  }, status: :unprocessable_entity
    end
end
