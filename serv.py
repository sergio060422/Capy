from flask import *
web = Flask("web")

def read(filename):
   file=open(filename,'rb')
   data=file.read(2**30)
   file.close()
   return data

@web.route('/<path:filename>')
def main(filename):
   if(filename.endswith('.js') or filename.endswith('.ts')):
      return Response(read(filename),mimetype='application/javascript')
   if(filename.endswith('.css'):
      return Response(read(filename),mimetype='text/css')     
   return read(filename)

@web.route('/')
def main2():
   return read('index.html')

web.run("0.0.0.0",80)