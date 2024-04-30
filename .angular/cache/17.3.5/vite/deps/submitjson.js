import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/openapi-fetch/dist/index.js
var DEFAULT_HEADERS = {
  "Content-Type": "application/json"
};
function createClient(clientOptions) {
  const _a = clientOptions ?? {}, {
    fetch: baseFetch = globalThis.fetch,
    querySerializer: globalQuerySerializer,
    bodySerializer: globalBodySerializer
  } = _a, baseOptions = __objRest(_a, [
    "fetch",
    "querySerializer",
    "bodySerializer"
  ]);
  let baseUrl = baseOptions.baseUrl ?? "";
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }
  function coreFetch(url, fetchOptions) {
    return __async(this, null, function* () {
      const _a2 = fetchOptions || {}, {
        fetch = baseFetch,
        headers,
        body: requestBody,
        params = {},
        parseAs = "json",
        querySerializer = globalQuerySerializer ?? defaultQuerySerializer,
        bodySerializer = globalBodySerializer ?? defaultBodySerializer
      } = _a2, init = __objRest(_a2, [
        "fetch",
        "headers",
        "body",
        "params",
        "parseAs",
        "querySerializer",
        "bodySerializer"
      ]);
      const finalURL = createFinalURL(url, {
        baseUrl,
        params,
        querySerializer
      });
      const finalHeaders = mergeHeaders(
        DEFAULT_HEADERS,
        clientOptions?.headers,
        headers,
        params.header
      );
      const requestInit = __spreadProps(__spreadValues(__spreadValues({
        redirect: "follow"
      }, baseOptions), init), {
        headers: finalHeaders
      });
      if (requestBody) {
        requestInit.body = bodySerializer(requestBody);
      }
      if (requestInit.body instanceof FormData) {
        finalHeaders.delete("Content-Type");
      }
      const response = yield fetch(finalURL, requestInit);
      if (response.status === 204 || response.headers.get("Content-Length") === "0") {
        return response.ok ? { data: {}, response } : { error: {}, response };
      }
      if (response.ok) {
        if (parseAs === "stream") {
          return { data: response.clone().body, response };
        }
        const cloned = response.clone();
        return {
          data: typeof cloned[parseAs] === "function" ? yield cloned[parseAs]() : yield cloned.text(),
          response
        };
      }
      let error = {};
      try {
        error = yield response.clone().json();
      } catch {
        error = yield response.clone().text();
      }
      return { error, response };
    });
  }
  return {
    /** Call a GET endpoint */
    GET(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "GET" }));
      });
    },
    /** Call a PUT endpoint */
    PUT(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "PUT" }));
      });
    },
    /** Call a POST endpoint */
    POST(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "POST" }));
      });
    },
    /** Call a DELETE endpoint */
    DELETE(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "DELETE" }));
      });
    },
    /** Call a OPTIONS endpoint */
    OPTIONS(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "OPTIONS" }));
      });
    },
    /** Call a HEAD endpoint */
    HEAD(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "HEAD" }));
      });
    },
    /** Call a PATCH endpoint */
    PATCH(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "PATCH" }));
      });
    },
    /** Call a TRACE endpoint */
    TRACE(url, init) {
      return __async(this, null, function* () {
        return coreFetch(url, __spreadProps(__spreadValues({}, init), { method: "TRACE" }));
      });
    }
  };
}
function defaultQuerySerializer(q) {
  const search = [];
  if (q && typeof q === "object") {
    for (const [k, v] of Object.entries(q)) {
      const value = defaultQueryParamSerializer([k], v);
      if (value) {
        search.push(value);
      }
    }
  }
  return search.join("&");
}
function defaultQueryParamSerializer(key, value) {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return `${deepObjectPath(key)}=${encodeURIComponent(value)}`;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return `${deepObjectPath(key)}=${String(value)}`;
  }
  if (Array.isArray(value)) {
    if (!value.length) {
      return void 0;
    }
    const nextValue = [];
    for (const item of value) {
      const next = defaultQueryParamSerializer(key, item);
      if (next !== void 0) {
        nextValue.push(next);
      }
    }
    return nextValue.join(`&`);
  }
  if (typeof value === "object") {
    if (!Object.keys(value).length) {
      return void 0;
    }
    const nextValue = [];
    for (const [k, v] of Object.entries(value)) {
      if (v !== void 0 && v !== null) {
        const next = defaultQueryParamSerializer([...key, k], v);
        if (next !== void 0) {
          nextValue.push(next);
        }
      }
    }
    return nextValue.join("&");
  }
  return encodeURIComponent(`${deepObjectPath(key)}=${String(value)}`);
}
function deepObjectPath(path) {
  let output = path[0];
  for (const k of path.slice(1)) {
    output += `[${k}]`;
  }
  return output;
}
function defaultBodySerializer(body) {
  return JSON.stringify(body);
}
function createFinalURL(pathname, options) {
  let finalURL = `${options.baseUrl}${pathname}`;
  if (options.params.path) {
    for (const [k, v] of Object.entries(options.params.path)) {
      finalURL = finalURL.replace(`{${k}}`, encodeURIComponent(String(v)));
    }
  }
  const search = options.querySerializer(options.params.query ?? {});
  if (search) {
    finalURL += `?${search}`;
  }
  return finalURL;
}
function mergeHeaders(...allHeaders) {
  const headers = new Headers();
  for (const headerSet of allHeaders) {
    if (!headerSet || typeof headerSet !== "object") {
      continue;
    }
    const iterator = headerSet instanceof Headers ? headerSet.entries() : Object.entries(headerSet);
    for (const [k, v] of iterator) {
      if (v === null) {
        headers.delete(k);
      } else if (v !== void 0) {
        headers.set(k, v);
      }
    }
  }
  return headers;
}

// node_modules/submitjson/dist/index.js
var { POST } = createClient({
  baseUrl: "https://api.submitjson.com/"
});
var SubmitJSON = class {
  apiKey;
  endpointSlug;
  options;
  constructor(config) {
    this.apiKey = config.apiKey;
    this.endpointSlug = config.endpoint;
    this.options = config.options;
  }
  getHeaders() {
    return {
      "X-API-Key": this.apiKey
    };
  }
  submit(data, options, endpoint) {
    return __async(this, null, function* () {
      try {
        let d;
        if (data instanceof FormData) {
          JSON.stringify(Object.fromEntries(data));
          d = Object.fromEntries(data);
        } else if (typeof data === "string") {
          const s = JSON.parse(data);
          if (typeof s !== "object")
            throw new Error(`☠️ The string you pass in must parse into a valid JSON object e.g. { your: 'string' }`);
          d = s;
        } else if (typeof data === "object") {
          JSON.stringify(data);
          d = data;
        } else {
          throw new TypeError("☠️ The first argument must be a valid JSON object, string, or FormData");
        }
        if (typeof options === "string")
          endpoint = options;
        const endpointSlug = endpoint || this.endpointSlug;
        if (endpointSlug === void 0)
          throw new Error("☠️ No endpoint defined. Add one to your client configuration or to this submit call.");
        const body = { data: d };
        let o;
        if (typeof this.options === "object")
          o = this.options;
        if (typeof options === "object")
          o ? o = __spreadValues(__spreadValues({}, o), options) : o = options;
        if (o) {
          const { emailNotification, submissionFormat, submissionSound, emailReplyTo, emailTo, emailSubject, emailBranding } = o;
          const options2 = { emailNotification, submissionFormat, submissionSound, emailReplyTo, emailTo, emailBranding, emailSubject };
          Object.keys(options2).forEach((key) => options2 && options2[key] === void 0 && delete options2[key]);
          if (Object.keys(options2).length > 0)
            body.options = options2;
        }
        const { data: submission, error } = yield POST("/v1/submit/{endpointSlug}", {
          headers: this.getHeaders(),
          params: {
            path: { endpointSlug }
          },
          body
        });
        if (error)
          throw new Error(error.message);
        return submission;
      } catch (error) {
        console.error(error);
      }
    });
  }
};
export {
  SubmitJSON as default
};
//# sourceMappingURL=submitjson.js.map
