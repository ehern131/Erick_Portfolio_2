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
get '/skyfinancial' do
  File.read(File.join('public','SkyFinancialMP.html'))
end
