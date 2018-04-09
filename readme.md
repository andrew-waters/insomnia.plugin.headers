# Insomnia Plugin: Add Headers to Requests via Config

This is a small plugin for [insomnia](https://github.com/getinsomnia/insomnia) that allows you to add headers to all outbound requests without having to add them in the UI for every request.

## Installation

With insomnia open, go to Preferences > Plugins. Add `insomnia-plugin-headers` to the package name field and click `Install Plugin`.

## Configuration

To add your headers, open up the environment manager and create a `headers` object in the body with named object values:

```json
{
    "headers": {
        "X-CUSTOM-HEADER": "your value",
        "X-ANOTHER-CUSTOM-HEADER": "another value",
    }
}
```

Now all requests will be sent from insomnia with `X-CUSTOM-HEADER: your value` and `X-ANOTHER-CUSTOM-HEADER: another value` as well as any specified in the request and the ones added by insomnia.
