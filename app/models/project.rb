class Project < ApplicationRecord
    has_many :comments 
    has_many :users, through: :comments

    belongs_to :user

    validates :title, presence: true
    validates :description, presence: true, length: { minimum: 20 }
    validates :main_goal, presence: true

    def username
        self.user.username
    end

    def short_description
        self.description[0..19] + "..."
    end
end
