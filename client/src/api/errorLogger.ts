export const errorLogger = (err: any) => {
  if (err.response) {
    /**
     * * Server response outside of the range of 2xx
     */
    console.log(err.response.date);
    console.log(err.response.status);
    console.log(err.response.headers);
  } else if (err.request) {
    /**
     * * No response was received so the error sits in the browser
     */
    console.log(err.request);
  } else {
    /**
     * * Error setting up the request
     */
    console.log("Error", err.message);
  }

  console.log(err.config);
};
