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
	m.Get("/api/things", ThingsIndexHandler)
	m.Get("/api/things/:thingId", ThingsShowHandler)
	m.Put("/api/things/:thingId", ThingsUpdateHandler)
	m.Post("/api/things", ThingsCreateHandler)
	m.Delete("/api/things/:thingId", ThingsDeleteHandler)
	m.Run()
}
