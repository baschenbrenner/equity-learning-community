class CommentsController < ApplicationController
    
    def create
        user = User.find_by(id: session[:user_id])
        comment = user.comments.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end         
    end

    def index
        comments = comment.all
        render json: comments, status: :ok  
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        comment = user.comments.find_by(id: params[:id])
        if comment.destroy
            render json: comment
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end     
    end

    def update
        user = User.find_by(id: session[:user_id])
        comment = user.comments.find_by(id: params[:id])      
        if comment.update(comment_params)
            render json: comment, status: :created
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:project_id, :body)
    end
end
