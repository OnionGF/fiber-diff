/*
 * @Author: onino
 * @Date: 2022-10-02 08:39:56
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 09:15:17
 * @Description: 创建服务
 */

// server.js
import express from "express"
const app = express()
app.use(express.static("dist"))
const template = `
  <html>
    <head>
      <title>React Fiber</title>
    </head>
    <body>
        <div id="root"></div>
		<script src="bundle.js"></script>
    </body>
  </html>
`
app.get("*", (req, res) => {
    res.send(template)
})
app.listen(3000, () => console.log("server is running"))