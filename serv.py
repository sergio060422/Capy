from flask import *
import urllib.request as rq
import requests

def WEB():

    def GetRand():
        up=rq.urlopen("https://api.capy.lol/v1/capybara")
        data = up.read(2**30)
        return data
    def GetFact():
        rr = request.get("https://api.capy.lol/v1/fact")
        return rr
    web = Flask("vshell")
    @web.route("/<path:sub_path>")
    def public(sub_path):
        if(sub_path.endswith('.js') or sub_path.endswith('.ts')):
            return Response(route(sub_path), mimetype='application/javascript')
        if(sub_path.endswith('.css')):
            return Response(route(sub_path), mimetype='text/css')
        return route(sub_path)
    @web.route("/fact")
    def fact():
        data = "{}"
        for i in range(5):
            try:
                data = GetFact()
                data = data.text
                break
            except Exception as e:
                print(str(e))
                continue
        return Response(data,mimetype="application/json")
    @web.route("/rand")
    def rand():
        data = "No info"
        for i in range(5):
            try:
                data = GetRand()
                break
            except Exception as e:
                print(e)
                continue
        return Response(data,mimetype="image/png")
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
