const handleError = async ({ error, event }) => {
  const errorId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  console.error(`[Error ${errorId}]`, error);
  console.error("Request URL:", event.url.toString());
  console.error("Request Method:", event.request.method);
  let message = "An unexpected error occurred";
  let details = "";
  let statusCode = 500;
  if (error instanceof Error) {
    message = error.message;
    details = error.stack || "";
    if (error.message.includes("ECONNREFUSED") || error.message.includes("connect ECONNREFUSED") || error.message.includes("getaddrinfo") || error.message.includes("ETIMEDOUT")) {
      message = "Database Connection Error";
      details = `Failed to connect to database: ${error.message}`;
    }
  }
  return {
    message,
    details,
    statusCode,
    errorId,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: event.url.toString()
  };
};
const handle = async ({ event, resolve }) => {
  try {
    return await resolve(event);
  } catch (error) {
    console.error("Unhandled error in request:", error);
    throw error;
  }
};

export { handle, handleError };
//# sourceMappingURL=hooks.server-DZCLD8pz.js.map
