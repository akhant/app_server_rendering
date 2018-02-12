import express from 'express'
import {renderToString} from 'react-dom/server'
import severTemplate from './src/ServerTemplate'
import App from './src/components/App'
import React from 'react'

const app = express()

app.get('/', (req,res) => {
  const appString= renderToString(<App />)
  res.send(severTemplate(appString))
}
)

app.use('/dist', express.static('./dist'))

const port = 8082

app.listen(port, () => {
  console.log("running on port " + port)
}
)