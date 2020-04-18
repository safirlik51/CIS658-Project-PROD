Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000'
  
      resource 'https://wwwcie.ups.com/rest/Track',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end

    allow do
      origins 'https://pure-retreat-87998.herokuapp.com/'
  
      resource 'https://wwwcie.ups.com/rest/Track',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end

    allow do
      origins 'https://wwwcie.ups.com/rest/Track'
  
      resource 'https://wwwcie.ups.com/rest/Track',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
      
end