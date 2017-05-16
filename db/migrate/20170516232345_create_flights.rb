class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :origin
      t.string :destination
      t.date :flight_date
      t.integer :airplane_id

      t.timestamps
    end
  end
end
