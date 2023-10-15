class ProjectsController < ApplicationController
    skip_before_action :authorize, only: [:description, :custom]
    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def create
        project = project.create(project_params)
        if project.valid?
            render json: project, status: :created
        else
            render json: {  errors: project.errors.full_messages  }, status: :unprocessable_entity
        end
    end

    
    private

    def project_params
        params.permit(:title, :description, :main_goal, :secondar_goal)
    end
end

