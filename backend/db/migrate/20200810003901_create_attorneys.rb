class CreateAttorneys < ActiveRecord::Migration[6.0]
  def change
    create_table :attorneys do |t|
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
