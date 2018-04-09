# Insomnia Plugin: Add Headers to Requests via Config

This is a small plugin for [insomnia](https://github.com/getinsomnia/insomnia) that allows you to add headers to all outbound requests without having to add them in the UI.

To add your headers, open up the environment manager and create a `headers` object in the body with named object values:

```json
{
    "headers": {
        "X-CUSTOM-HEADER": "your value",
        // ...
    }
}
```

Now all requests will be sent from insomnia with `X-CUSTOM-HEADER: your value` as well as any specified in the request itself.
