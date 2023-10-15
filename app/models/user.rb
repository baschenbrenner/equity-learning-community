class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews
    has_many :encabulators, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
end
