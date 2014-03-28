package main

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/codegangsta/martini"
	"github.com/martini-contrib/render"
)

func ThingsIndexHandler(r render.Render) {
	r.JSON(200, map[string]interface{}{"things": GetThings()})
}

func ThingsCreateHandler(req *http.Request, r render.Render) {
	var thingJSON ThingJSON
	err := json.NewDecoder(req.Body).Decode(&thingJSON)
	if err != nil {
		panic(err)
	}
	thingJSON.Thing.Create()
	r.JSON(200, map[string]interface{}{"thing": thingJSON.Thing})
}

func ThingsShowHandler(params martini.Params, r render.Render) {
	thing := GetThing(params["thingId"])
	r.JSON(200, map[string]interface{}{"thing": thing})
}

func ThingsUpdateHandler(req *http.Request, params martini.Params, r render.Render) {
	var thingJSON ThingJSON
	err := json.NewDecoder(req.Body).Decode(&thingJSON)
	if err != nil {
		panic(err)
	}
	checkErr(err, "oops")
	thisId, _ := strconv.ParseInt(params["thingId"], 0, 64)
	thingJSON.Thing.Id = thisId
	thingJSON.Thing.Update()
	r.JSON(200, map[string]interface{}{"thing": thingJSON.Thing})
}

func ThingsDeleteHandler(params martini.Params, r render.Render) {
	thing := GetThing(params["thingId"])
	thing.Delete()
	r.JSON(200, "ok")
}
