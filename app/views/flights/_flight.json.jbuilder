json.extract! flight, :id, :flight_number, :origin, :destination, :flight_date, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
