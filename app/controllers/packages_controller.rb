class PackagesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_package, only: [:show, :edit, :update, :destroy]
  before_action :set_carrier
  skip_before_action :verify_authenticity_token

  # GET /packages
  # GET /packages.json
  def index
    @packages = Package.all
    @package = Package.new
  end

  # GET /packages/1
  # GET /packages/1.json
  def show
    json_response(@package = Package.find(params[:id]))
  end

  # GET /packages/new
  def new
    @package = Package.new
  end

  # GET /packages/1/edit
  def edit
  end

  # POST /packages
  # POST /packages.json
  def create
    @package = Package.new(package_params)

    respond_to do |format|
      if @package.save
        format.html { redirect_to packages_path, notice: 'Package was successfully created.' }
        format.json { render :show, status: :created, location: @package }
      else
        format.html { redirect_to packages_path }
        format.json { render json: @package.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /packages/1
  # PATCH/PUT /packages/1.json
  def update
    respond_to do |format|
      if @package.update(package_params)
        format.html { redirect_to @package, notice: 'Package was successfully updated.' }
        format.json { render :show, status: :ok, location: @package }
      else
        format.html { render :edit }
        format.json { render json: @package.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /packages/1
  # DELETE /packages/1.json
  def destroy
    @package.destroy
    respond_to do |format|
      format.html { redirect_to packages_url, notice: 'Package was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def post
      data = request.body.read
      url = "http://localhost:3000/rest/Track"
      conn = Faraday.new(url)
      response = conn.post(url,data,"Content-Type" => "application/json")
      puts "Success!"
      puts response.to_json
      render json: response
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_package
      @package = Package.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def package_params
      params.require(:package).permit(:tracking, :carrier, :status)
    end

    def set_carrier
      @carriers = Package.carriers
    end
end
