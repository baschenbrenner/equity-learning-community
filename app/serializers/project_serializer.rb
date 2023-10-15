class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :main_goal, :secondary_goal

  has_many :comments
end
