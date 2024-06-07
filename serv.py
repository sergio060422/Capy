from flask import *
def WEB():
    web = Flask("vshell")
    @web.route("/<path:sub_path>")
    def public(sub_path):
        if(sub_path.endswith('.js') or sub_path.endswith('.ts')):
            return Response(route(sub_path), mimetype='application/javascript')
        if(sub_path.endswith('.css')):
            return Response(route(sub_path), mimetype='text/css')
        return route(sub_path)

    def route(url):
        try:
            file = open(url,'rb')
            line = file.read(65535)
            text = b""
            while line:
                text = text + line
                line = file.read(65535)
            return text
        except Exception as e:
            return str(e)
    
    @web.route("/")
    def main():
        return route("index.html")
    web.run("0.0.0.0",80)

WEB()
