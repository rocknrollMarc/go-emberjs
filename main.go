package main

import (
	"log"

	"github.com/codegangsta/martini"
	"github.com/codegangsta/martini-contrib/binding"
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
	m.Post("/api/things/:thingId", binding.Json(Thing{}), ThingsUpdateHandler)
	m.Post("/api/things", binding.Json(Thing{}), ThingsCreateHandler)
	m.Delete("/api/things/:thingId", ThingsDeleteHandler)
	m.Run()
}
