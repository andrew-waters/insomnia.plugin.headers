
// Request hook to set specified headers on every request
module.exports.requestHooks = [
  context => {
    let headers = context.request.getEnvironmentVariable('headers');
    if (headers !== undefined) {
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          context.request.setHeader(header, headers[header]);
        }
      }
    }
  }
];
