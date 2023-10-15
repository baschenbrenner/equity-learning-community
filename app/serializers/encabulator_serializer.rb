class EncabulatorSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :image_url

  has_many :reviews
end
