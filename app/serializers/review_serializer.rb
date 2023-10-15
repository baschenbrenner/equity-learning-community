class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user
end
