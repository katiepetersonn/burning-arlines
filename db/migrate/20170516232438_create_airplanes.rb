class CreateAirplanes < ActiveRecord::Migration[5.0]
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :row
      t.string :column

      t.timestamps
    end
  end
end
