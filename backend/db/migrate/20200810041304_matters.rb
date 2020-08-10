class Matters < ActiveRecord::Migration[6.0]
  def change
    create_table :matters do |t|
      t.string :plaintiff
      t.string :defendant
      t.string :case_number
      t.belongs_to :attorney
    end
  end
end
