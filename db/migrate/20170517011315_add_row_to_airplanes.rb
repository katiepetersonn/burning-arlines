class AddRowToAirplanes < ActiveRecord::Migration[5.0]
  def change
    add_column :airplanes, :row, :integer
  end
end
