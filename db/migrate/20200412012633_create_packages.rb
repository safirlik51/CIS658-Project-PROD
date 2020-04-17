class CreatePackages < ActiveRecord::Migration[6.0]
  def change
    create_table :packages do |t|
      t.string :tracking
      t.string :carrier
      t.string :status

      t.timestamps
    end
  end
end
