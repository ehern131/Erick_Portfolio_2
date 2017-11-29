require 'sinatra'

get '/' do
  File.read(File.join('public','index.html'))
end
get '/index' do
  File.read(File.join('public','index.html'))
end
get '/index2' do
  File.read(File.join('public','index2.html'))
end
