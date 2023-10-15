class Project < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments

    validates :title, presence: true
    validates :description, presence: true, length: { minimum: 20 }
    validates :main_goal

end
