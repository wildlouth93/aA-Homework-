class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :usernmae, null: false
      t.string :password_digest, null: false 
      t.string :session_token, null: false 

      t.timestamps
    end
  end
end
