package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func PrepareDatabase(db *sql.DB) {
	sql := `
	create table blogs (id integer not null primary key, title text, body text);
	delete from foo;
	`
	_, err := db.Exec(sql)
	if err != nil {
		log.Printf("%q: %s\n", err, sql)
		return
	}
}

func PrepareBlogsTable(db *sql.DB) {
	sql := `delete from blogs;`
	_, err := db.Exec(sql)
	if err != nil {
		log.Printf("%q: %s\n", err, sql)
		return
	}
	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}
	stmt, err := tx.Prepare("insert into blogs(id, title, body) values(?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(1, "foo", "bar")
	if err != nil {
		log.Fatal(err)
	}
	tx.Commit()
}

func PrepareSqlite(db *sql.DB) {
	PrepareDatabase(db)
	PrepareBlogsTable(db)
}
