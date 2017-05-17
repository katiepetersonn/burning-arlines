class ChangeColumnsRowsToInt < ActiveRecord::Migration[5.0]
  def change
    remove_column :reservations, :row, :string
    remove_column :reservations, :column, :string
    add_column :reservations, :row, :integer
    add_column :reservations, :column, :integer
  end
end
