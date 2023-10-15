class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :main_goal
      t.string :secondary_goal

      t.timestamps
    end
  end
end
