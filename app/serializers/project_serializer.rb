class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :main_goal, :secondary_goal, :username, :short_description

  has_many :comments
end
