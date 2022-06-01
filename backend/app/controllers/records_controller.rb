class RecordsController < ApplicationController
    before_action :authorize_request

    def add
        @record = @current_user.records.build(recordParams)
        if @record.save!
            render status: :created
        end
    end

    def getRecsOfUser
        records = User.find_by(id: getUid).records
        records = records.map do |r| 
            {
                id: r.id,
                createdAt: r.created_at.to_s,
                distance: r.distance, 
                startTime: r.start_time.to_s, 
                endTime: r.end_time.to_s,
            } 
        end
        render json: { records: records }, status: :ok
    end

    def destroy
        record = @current_user.records.find_by(id: params[:id])
        if !record.nil?
            record.destroy!
            render status: :ok
            return
        end

        if @current_user.admin
            User.find_by(id: getParams['target']).records.find_by(id: params[:id]).destroy!
            render status: :ok
        end
    end
    
    private
        def recordParams
            params.permit(
                :distance, :start_time, :end_time
            )
        end

        def getUid
            params.permit(:uid)[:uid]
        end
end
