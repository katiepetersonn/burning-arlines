class ChangeColumnsToInteger < ActiveRecord::Migration[5.0]
  def change
    remove_column :airplanes, :column, :string
    add_column :airplanes, :column, :integer
  end
end
