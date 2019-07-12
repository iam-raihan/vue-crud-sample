class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

const isFakeApi = process.env.VUE_APP_FAKE_API_SERVER === "true";

const send = async (url, options) => {
  options.headers = {
    "Content-Type": "application/json"
  };

  try {
    let res = await fetch(url, options);

    if (res.status === 200 || res.status === 201) {
      return res.json();
    } else {
      throw new HttpError(res);
    }
  } catch (err) {
    /**
     * when using fake api server,
     * changes by API calls aren't persisted!
     * POST, PUT, DELETE requests doesn't update database.
     * so consider status 404 (Not Found) as valid
     * and return data from options.body
     */
    if (isFakeApi && err instanceof HttpError && err.response.status === 404) {
      return JSON.parse(options.body || "{}");
    }

    console.log("error:", err);
    throw err;
  }
};

export const fetchData = baseUrl => {
  if (typeof baseUrl !== "string") {
    throw "invalid url in fetchData";
  }

  const types = {
    GET() {
      let options = {};

      return send(baseUrl, options);
    },

    POST(data) {
      let options = {
        method: "POST",
        body: JSON.stringify(data)
      };

      return send(baseUrl, options);
    },

    PUT(id, data) {
      let options = {
        method: "PUT",
        body: JSON.stringify(data)
      };

      return send(baseUrl + "/" + id, options);
    },

    DELETE(id) {
      let options = {
        method: "DELETE"
      };

      return send(baseUrl + "/" + id, options);
    }
  };

  return types;
};
