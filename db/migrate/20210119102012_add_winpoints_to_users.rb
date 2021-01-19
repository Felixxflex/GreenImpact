class AddWinpointsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :winpoints, :integer
  end
end
