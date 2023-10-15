class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :email
  has_many :created_projects
end
