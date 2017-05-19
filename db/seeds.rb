Airplane.destroy_all

a1 = Airplane.create({
    name: 'PKC4211',
    row: 100,
    column: 26
})

a2 = Airplane.create({
    name: 'PLF622',
    row: 95,
    column: 21
})

a3 = Airplane.create({
    name: 'KLH936',
    row: 80,
    column: 16
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
        airplane_id: a1.id
    })

puts "The airplane #{a1.name} will now be departing"
puts "The flight"
# puts "The #{airplane_id} #{flight_number} will fly from #{origin} to #{destination} at " + Date.today
end

Flight.create({
    flight_number: "flight_no0",
    origin: "origin 0",
    destination: "destination 1",
    flight_date: Date.today,
    airplane_id: a1.id
})

Flight.create({
    flight_number: "flight_no0",
    origin: "origin 0",
    destination: "destination 2",
    flight_date: Date.today,
    airplane_id: a1.id
})

Flight.create({
    flight_number: "flight_no0",
    origin: "origin 0",
    destination: "destination 3",
    flight_date: Date.today,
    airplane_id: a1.id
})


User.destroy_all

5.times do |i|
    User.create({
        name: "Macho"
    })

puts "The Macho"

end


Reservation.destroy_all

5.times do |i|
    Reservation.create({
            row: 55,
            column: 24,
            flight_id: 736,
            user_id: 333
        })
end
