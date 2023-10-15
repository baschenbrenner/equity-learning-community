class Encabulator < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :description, presence: true, length: { minimum: 20 }

end
