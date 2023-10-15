puts "seeding"
require 'faker'


10.times do 

    User.create(username: Faker::Name.name.split(" ")[0], name: Faker::Name.name, password: "1234", bio: Faker::Quote.jack_handey, email: Faker::Internet.email )
end 

20.times do 

    Project.create(title: Faker::Commerce.product_name, description: Faker::Lorem.sentence(word_count: rand(5..12)), main_goal: "to help students")

end

50.times do
Comment.create(user_id: rand(1...10), project_id: rand(1..20), body: Faker::Lorem.sentence)
end

puts "seeded"