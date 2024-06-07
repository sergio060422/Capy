from flask import *
web = Flask(name="web")

@web.route('/<path:filename>')
def main(filename):
   if(sub_path.endswith('.js') or sub_path.endswith('.ts')):
      return Response(read(filename),mimetype='application/javascript')    
   return read(filename)

@web.route('/')
def main2():
   return Response(read('index.html'))

def read(filename):
   file=open(filename,'rb')
   data=file.read(2**30)
   file.close()
   return data