class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :created_projects, class_name: "Project", foreign_key: :user_id, dependent: :destroy
    has_many :projects, through: :comments

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :email, presence: true
end
