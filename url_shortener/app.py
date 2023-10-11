from flask import request, redirect, Flask
from hashlib import md5


app = Flask("url_shortener")

mapping = {}


@app.route("/shorten", methods=["POST"])
def shorten():
    global mapping
    payload = request.json

    if "url" not in payload:
        return "URL parameter missing", 400

    # we can check here if url is valid or not

    hash_ = md5()
    hash_.update(payload["url"].encode())
    digest = hash_.hexdigest()[:5]

    if digest not in mapping:
        mapping[digest] = payload["url"]
        return f"Shortened URL: r/{digest}\n"
    else:
        # hash collision
        return f"Already exists: r/{mapping[digest]}\n"


@app.route("/r/<hash_>")
def redirect_(hash_):
    if hash_ not in mapping:
        return "URL not found", 404
    return redirect(mapping[hash_])


if __name__ == "__main__":
    app.run(debug=True)
