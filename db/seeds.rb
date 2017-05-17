Airplane.destroy_all

a1 = Airplane.create({
    name: 'PKC4211',
    row: '100',
    column: '26'  # THIS IS FOREIGN KEY
})

a2 = Airplane.create({
    name: 'PLF622',
    row: '95',
    column: '21'
})

a3 = Airplane.create({
    name: 'KLH936',
    row: '80',
    column: '16'
})

puts "Airplane is ready to launch #{a1.name}"
puts "Airplane is ready to launch #{a2.name}"
puts "Airplane is ready to launch #{a3.name}"

Flight.destroy_all

10.times do |i|
    Flight.create({
        flight_number: "flight_no#{i}",
        origin: "origin #{i}",
        destination: "destination #{i}",
        flight_date: Date.today,
        airplane_id: "airplane_id #{a1.id}"
    })

puts "The airplane #{a1.name} will now be departing"
puts "The flight"
# puts "The #{airplane_id} #{flight_number} will fly from #{origin} to #{destination} at " + Date.today
end


# User.destroy_all
#
# 5.times do |i|
#     User.create({
#         name: "name"
#     })
# end


# ### ID ###
# Reservation.create row: row, column: column, flight_id: flight_id, user_id: user_id
# User.create name: name
#
# puts "Airplanes count: #{ Airplanes.count }"

# Flight.destroy_all
#     100.times do |index|
#         row = ""
#
#         Flight.create origin: origin, destination: destination, date: date, airplane_id: airplane_id
#     end
#
# Reservation.destroy_all



# User.destroy_all
