from flask import *
web = Flask("web")

@web.route('/<path:filename>')
def main(filename):
   if(sub_path.endswith('.js') or sub_path.endswith('.ts')):
      return Response(read(filename),mimetype='application/javascript')
   if(sub_path.endswith('.css'):
      return Response(read(filename),mimetype='text/css')     
   return read(filename)

@web.route('/')
def main2():
   return Response(read('index.html'))

def read(filename):
   file=open(filename,'rb')
   data=file.read(2**30)
   file.close()
   return data
web.run("0.0.0.0",80)