class MattersController < ApplicationController
  before_action :set_matter, only: [:show, :update, :destroy]

  # GET /matters
  def index
    @matters = Matter.all

    render json: @matters
  end

  # GET /matters/1
  def show
    render json: @matter
  end

  # POST /matter
  def create
    @matter = Matter.new(matter_params)

    if @matter.save
      render json: @mater, status: :created, location: @matter
    else
      render json: @matter.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /matters/1
  def update
    if @matter.update(matter_params)
      render json: @matter
    else
      render json: @matter.errors, status: :unprocessable_entity
    end
  end

  # DELETE /matters/1
  def destroy
    @matter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_matter
      @matter = Matter.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def matter_params
      params.require(:matter).permit(:plaintiff, :defendant, :case_number)
    end
end
