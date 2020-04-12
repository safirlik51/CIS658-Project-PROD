Rails.application.config.middleware.use OmniAuth::Builder do
    provider(
      :auth0,
      'pPC8QMjoLmesb75THEKXIVZXPMMwpRpD',
      'XVc6gsexzpQ_7cwVR_wXcffQNn6hB1Js7zmzWkmzmNs1drL-uTM16rCmZiS_SEXU',
      'packertracker.auth0.com',
      callback_path: '/auth/auth0/callback',
      authorize_params: {
        scope: 'openid email profile'
      }
    )
end