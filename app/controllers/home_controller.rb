class HomeController < ApplicationController
  def index

  	@date = params[:date] || Time.now.strftime("%m/%d/%Y") 
  	Rails.logger.info "===============#{@date}"

  	@activities = Activity.where(:date_selcted => @date).all
  	Rails.logger.info "===============#{@activities.blank?}"
  end

  def chage_date
  	@activities = Activity.where(:date_selcted => params[:date]).all
  	render :partial => "activity_table"
  end


  def save_activity
  	Activity.create(activity_params)
  	redirect_to root_path(date: params[:activity][:date_selcted])
  end

  def delete_activity
    Activity.find(params[:id]).destroy
    redirect_to root_path(date: params[:date])
  end


  private 

	def activity_params
		params.require(:activity).permit(:activity_name, :date_selcted, :date_from, :date_to)
	end

end
