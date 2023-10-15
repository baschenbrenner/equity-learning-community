class Comment < ApplicationRecord
    belongs_to :project
    belongs_to :user

    validates :body, presence: true, length: { minimum: 10 }

    def username
        self.user.username
    end 
end
