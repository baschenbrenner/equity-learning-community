class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :project_id, :username, :updated_at
end
