require 'sinatra'

get '/' do
  File.read(File.join('public','index.html'))
end
get '/index' do
  File.read(File.join('public','index.html'))
end
get '/indexnew' do
  File.read(File.join('public','indexNew.html'))
end
get '/softwarewest' do
  File.read(File.join('public','SoftwareWest.html'))
end
