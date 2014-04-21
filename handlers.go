package main

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/codegangsta/martini"
	"github.com/martini-contrib/render"
)

func BlogsIndexHandler(db *sql.DB, r render.Render) {
	r.JSON(200, map[string]interface{}{"blogs": GetBlogs(db)})
}

func BlogsCreateHandler(req *http.Request, r render.Render, db *sql.DB) {
	var blogJSON BlogJSON
	err := json.NewDecoder(req.Body).Decode(&blogJSON)
	if err != nil {
		panic(err)
	}
	blogJSON.Blog.Create(db)
	r.JSON(200, map[string]interface{}{"blog": blogJSON.Blog})
}

func BlogsShowHandler(db *sql.DB, params martini.Params, r render.Render) {
	blog := GetBlog(db, params["blogId"])
	r.JSON(200, map[string]interface{}{"blog": blog})
}

func BlogsUpdateHandler(db *sql.DB, req *http.Request, params martini.Params, r render.Render) {
	var blogJSON BlogJSON
	err := json.NewDecoder(req.Body).Decode(&blogJSON)
	if err != nil {
		panic(err)
	}
	checkErr(err, "oops")
	thisId, _ := strconv.ParseInt(params["blogId"], 0, 64)
	blogJSON.Blog.Id = thisId
	blogJSON.Blog.Update(db)
	r.JSON(200, map[string]interface{}{"blog": blogJSON.Blog})
}

func BlogsDeleteHandler(db *sql.DB, params martini.Params, w http.ResponseWriter) {
	blog := GetBlog(db, params["blogId"])
	blog.Delete(db)
	w.WriteHeader(http.StatusNoContent)
}
