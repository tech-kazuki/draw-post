class AddUsernameToPictures < ActiveRecord::Migration[5.2]
  def change
    add_column :pictures, :user_name, :string
  end
end
