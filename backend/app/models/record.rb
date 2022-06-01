class Record < ApplicationRecord
    validates :distance, presence: true, comparison: { greater_than: 0 }
    validates :start_time, presence: true
    validates :end_time, presence: true, comparison: { greater_than: :start_time }
    belongs_to :user
end
