class ChangeDatatypeImageOfPictures < ActiveRecord::Migration[5.2]
  def change
    change_column :pictures, :image, :longtext
  end
end
