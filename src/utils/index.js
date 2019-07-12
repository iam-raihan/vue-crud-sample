class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

const isFakeApi = process.env.VUE_APP_FAKE_API_SERVER === "true";

export const fetchData = async (url, data, method = "GET") => {
  let options = data
    ? {
        method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    : {};

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
     * and return data directly
     */
    if (isFakeApi && err instanceof HttpError && err.response.status === 404) {
      return data;
    }

    console.log("error:", err);
    throw err;
  }
};
