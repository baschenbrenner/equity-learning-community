class ProjectsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def create
        project = @current_user.created_projects.create(project_params)
        if project.valid?
            render json: project, status: :created
        else
            render json: {  errors: project.errors.full_messages  }, status: :unprocessable_entity
        end
    end

    
    private

    def project_params
        params.permit(:title, :description, :main_goal, :secondary_goal)
    end
end

