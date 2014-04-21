package main

import (
	"database/sql"

	"github.com/codegangsta/martini"
	_ "github.com/mattn/go-sqlite3"
)

func DB() martini.Handler {
	var db *sql.DB
	var err error
	db, err = sql.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	PrepareSqlite(db)

	return func(c martini.Context) {
		c.Map(db)
		c.Next()
	}
}
