class Review < ApplicationRecord
    belongs_to :encabulator
    belongs_to :user

    validates :body, presence: true, length: { minimum: 20 }
end
