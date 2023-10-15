class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :projects, through: :comments

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :email, presence: true
end
