# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_bht-dashboard_session',
  :secret      => '157d9f540ceff623ddffb5ba2c6c0d7fca4b1a1bce746a2b588890dc0af4678bd83439e83c3962d9955b312af469b6f1220b260bc8c8292c4cde8d2509434694'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
