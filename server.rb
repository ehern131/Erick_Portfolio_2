require 'sinatra'

get '/' do
  File.read(File.join('public','index20171128.html'))
end
get '/index' do
  File.read(File.join('public','index20171128.html'))
end
get '/index2' do
  File.read(File.join('public','indexOriginal.html'))
end
