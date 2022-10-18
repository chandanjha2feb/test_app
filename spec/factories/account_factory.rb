FactoryBot.define do
    factory :account do
      sequence(:name) { |n| "Test (#{n})" }
      balance { 5000 }
    end
  end