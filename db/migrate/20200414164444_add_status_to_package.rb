class AddStatusToPackage < ActiveRecord::Migration[6.0]
  def change
    add_column :packages, :status, :string
  end
end
