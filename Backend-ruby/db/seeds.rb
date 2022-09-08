require 'rest-client'
require 'json'

puts "🌱 Seeding spices..."

response = RestClient.get "https://api.artic.edu/api/v1/artworks"

arts_hash = JSON.parse(response)

one = arts_hash['data'].first['image_id']

puts one
puts "✅ Done seeding!"
