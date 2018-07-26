class CatsController < ApplicationController
  #get all
  def index
    # cats_array = Cat.all.map{|cat| {id: cat.id, name: cat.name, breed: cat.breed, age: cat.age, quote: cat.quote}}
    render json: Cat.all
  end

  #get one
  def show
    # cat = Cat.all.find(params[:id])
    # new_cat_hash = {id: cat.id, name: cat.name, breed: cat.breed, age: cat.age, quote: cat.quote}
    render json: Cat.all.find(params[:id])
  end

  #post
  def create
    render json: Cat.create(cat_params)
  end
  def cat_params
    params.require(:cat).permit(:name, :breed, :age, :quote)
  end

  #patch
  def update
    Cat.all.find(params[:id]).update(cat_params)
    render json: Cat.all.find(params[:id])
  end

  #delete
  def destroy
    render json: Cat.destroy(params[:id])
  end

end
