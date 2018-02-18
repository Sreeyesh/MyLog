class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :activity_name
      t.string :date_selcted
      t.string :date_from
      t.string :date_to

      t.timestamps
    end
  end
end
