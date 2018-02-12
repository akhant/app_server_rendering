export default  (body) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
   
    <!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->
    <style>
      body {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
    margin: 100px auto;
    text-align: center;
}

.item {
    height: 250px;
    width: 300px;
    background: #999 center center;
    background-size: cover;
    cursor: pointer;
    margin-top: 40px;
}

.btn {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.btn_wrapper {
  text-align: center;
  margin: 100px auto;
}

    </style>
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root">${body}</div>
    <script src="dist/app.js" ></script>
  </body>
</html>`