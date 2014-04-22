package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func PrepareDatabase(db *sql.DB) {
	sql := `
	create table blogs (id integer not null primary key, title text, body text);
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
	_, err = stmt.Exec(1, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit nunc erat, eget faucibus dolor posuere sit amet. Donec sed est quis mauris lacinia porta. Proin vulputate, quam venenatis dapibus rhoncus, justo sapien sodales magna, sit amet aliquet elit elit vitae sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia varius odio in facilisis. Nunc ullamcorper rhoncus quam et tristique. Donec nec nisi urna. Cras quis dui massa.")
	if err != nil {
		log.Fatal(err)
	}
	_, err = stmt.Exec(2, "Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit nunc erat, eget faucibus dolor posuere sit amet. Donec sed est quis mauris lacinia porta. Proin vulputate, quam venenatis dapibus rhoncus, justo sapien sodales magna, sit amet aliquet elit elit vitae sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia varius odio in facilisis. Nunc ullamcorper rhoncus quam et tristique. Donec nec nisi urna. Cras quis dui massa.")
	if err != nil {
		log.Fatal(err)
	}
	tx.Commit()
}

func PrepareSqlite(db *sql.DB) {
	PrepareDatabase(db)
	PrepareBlogsTable(db)
}
