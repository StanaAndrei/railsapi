class ItemsController < ApplicationController

    def index
      res = [
          {'id':1, name: 'Orange'},
          {'id': 2, name: 'Apple'},
          {'id':3, name: 'Spinach'}]
  
      render json: res, status: 200
    end
  
  end