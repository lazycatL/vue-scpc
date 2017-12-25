'use strict'

let mysql = require('mysql')
let db = require('../db')

let pool = mysql.createPool(db)

module.exports = {
  connPool (sql, val, cb) {
    pool.getConnection((err, conn) => {
      let q = conn.query(sql, val, (err, rows) => {
        if (err) {
          console.log(err)
        }

        cb(err, rows)

        conn.release()
      })
    })
  },

    // json格式
  writeJson (res, code, msg, data) {
    let obj = {code, msg, data}

    if (!data) {
      delete obj.data
    }

    res.send(obj)
  }
}
