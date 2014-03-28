package main

import (
	"database/sql"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

type Thing struct {
	Id          int64  `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

func GetThing(id string) (thing Thing) {
	db := DBOpen()
	defer db.Close()
	row := db.QueryRow("select id, name, description from things where id=?", id)
	err := row.Scan(&thing.Id, &thing.Name, &thing.Description)
	if err != nil {
		if err == sql.ErrNoRows {
			err = nil
		}
	}
	checkErr(err, "Select thing from things failed")
	return
}

func (t *Thing) Create() (lastId int64) {
	db := DBOpen()
	defer db.Close()

	stmtIns, err := db.Prepare("INSERT INTO things (name,description) VALUES( ?, ? )")
	checkErr(err, "prepare insert failed")
	defer stmtIns.Close()
	res, err := stmtIns.Exec(t.Name, t.Description)
	checkErr(err, "insert failed")
	lastId, err = res.LastInsertId()
	checkErr(err, "last id failed")
	return

}

func (t *Thing) Update() {
	db := DBOpen()
	defer db.Close()

	stmtUpd, err := db.Prepare("update things set name = ?, description = ? where id = ?")
	checkErr(err, "prepare update failed")
	defer stmtUpd.Close()
	_, err = stmtUpd.Exec(t.Name, t.Description, strconv.FormatInt(t.Id, 10))
	checkErr(err, "update failed")
	return

}

func (t *Thing) Delete() {
	db := DBOpen()
	defer db.Close()

	stmtDel, err := db.Prepare("delete from things where id = ?")
	checkErr(err, "prepare delete failed")
	defer stmtDel.Close()
	_, err = stmtDel.Exec(strconv.FormatInt(t.Id, 10))
	checkErr(err, "delete failed")
	return
}

func GetThings() (thingList []Thing) {
	db := DBOpen()
	defer db.Close()
	rows, err := db.Query("select id, name, description from things")
	defer rows.Close()
	for rows.Next() {
		var thing Thing
		err = rows.Scan(&thing.Id, &thing.Name, &thing.Description)
		checkErr(err, "Select things failed")
		thingList = append(thingList, thing)
	}
	return
}
