package main

import (
	"log"

	"github.com/codegangsta/martini"
	"github.com/martini-contrib/render"
)

func checkErr(err error, msg string) {
	if err != nil {
		log.Fatalln(msg, err)
	}
}
func main() {
	m := martini.Classic()
	m.Use(render.Renderer())
	m.Use(DB())
	m.Get("/api/blogs", BlogsIndexHandler)
	m.Get("/api/blogs/:blogId", BlogsShowHandler)
	m.Put("/api/blogs/:blogId", BlogsUpdateHandler)
	m.Post("/api/blogs", BlogsCreateHandler)
	m.Delete("/api/blogs/:blogId", BlogsDeleteHandler)
	m.Run()
}
