class User < ApplicationRecord

  attr_reader: password 

  def self.find_by_credentials(username, password)
    user = User.find_by(usernmae: username, password: password)
  end

  def self.generate_session_token 
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    @session_token = User.generate_session_token
  end

  def ensure_session_token 
    if !@session_token 
      reset_session_token! 
    end
  end

  def password=(given)
    @password = given 

  end

  validates :usernmae, presence: true 
  validates :session_token, presence: true 
  validates :password_digest, message: "Password can't be blank", minimum: 6, allow_nil: true 

end
