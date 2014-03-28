package main

import (
	"log"
	"strconv"

	"github.com/codegangsta/martini"
	"github.com/martini-contrib/render"
)

func ThingsIndexHandler(r render.Render) {
	r.JSON(200, map[string]interface{}{"things": GetThings()})
}

func ThingsCreateHandler(thing Thing, r render.Render) {
	id := thing.Create()
	log.Printf("new thing created: %v", id)
	r.JSON(200, GetThing(strconv.FormatInt(id, 10)))
}

func ThingsShowHandler(params martini.Params, r render.Render) {
	log.Printf("show: %v", params["thingId"])
	r.JSON(200, GetThing(params["thingId"]))
}

func ThingsUpdateHandler(thing Thing, params martini.Params, r render.Render) {
	id, err := strconv.ParseInt(params["thingId"], 10, 64)
	checkErr(err, "oops")
	thing.Id = id
	thing.Update()
	r.JSON(200, GetThing(strconv.FormatInt(thing.Id, 10)))
}

func ThingsDeleteHandler(params martini.Params, r render.Render) {
	thing := GetThing(params["thingId"])
	thing.Delete()
	r.JSON(200, "ok")
}
