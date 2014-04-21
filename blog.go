package main

import (
	"database/sql"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

type Blog struct {
	Id    int64  `json:"id"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

type BlogJSON struct {
	Blog Blog `json:"blog"`
}

func GetBlog(db *sql.DB, id string) (blog Blog) {
	row := db.QueryRow("select id, title, body from blogs where id=?", id)
	err := row.Scan(&blog.Id, &blog.Title, &blog.Body)
	if err != nil {
		if err == sql.ErrNoRows {
			err = nil
		}
	}
	checkErr(err, "Select blog from blogs failed")
	return
}

func (t *Blog) Create(db *sql.DB) (lastId int64) {
	stmtIns, err := db.Prepare("INSERT INTO blogs (title,body) VALUES( ?, ? )")
	checkErr(err, "prepare insert failed")
	defer stmtIns.Close()
	res, err := stmtIns.Exec(t.Title, t.Body)
	checkErr(err, "insert failed")
	lastId, err = res.LastInsertId()
	checkErr(err, "last id failed")
	t.Id = lastId
	return

}

func (t *Blog) IdToS() string {
	return strconv.FormatInt(t.Id, 10)
}

func (t *Blog) Update(db *sql.DB) {
	stmtUpd, err := db.Prepare("update blogs set title = ?, body = ? where id = ?")
	checkErr(err, "prepare update failed")
	defer stmtUpd.Close()
	_, err = stmtUpd.Exec(t.Title, t.Body, t.IdToS())
	checkErr(err, "update failed")
	return

}

func (t *Blog) Delete(db *sql.DB) {
	stmtDel, err := db.Prepare("delete from blogs where id = ?")
	checkErr(err, "prepare delete failed")
	defer stmtDel.Close()
	_, err = stmtDel.Exec(strconv.FormatInt(t.Id, 10))
	checkErr(err, "delete failed")
	return
}

func GetBlogs(db *sql.DB) (blogList []Blog) {
	rows, err := db.Query("select id, title, body from blogs")
	defer rows.Close()
	for rows.Next() {
		var blog Blog
		err = rows.Scan(&blog.Id, &blog.Title, &blog.Body)
		checkErr(err, "Select blogs failed")
		blogList = append(blogList, blog)
	}
	return
}
