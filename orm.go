package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func DBOpen() (conn *sql.DB) {
	conn, err := sql.Open("mysql", "root:@/things_development")
	checkErr(err, "sql.Open failed")
	return
}

func DBClose(conn *sql.DB) {
	conn.Close()
	return
}
