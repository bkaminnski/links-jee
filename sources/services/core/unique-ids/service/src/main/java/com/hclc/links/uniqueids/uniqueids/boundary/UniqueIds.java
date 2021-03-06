package com.hclc.links.uniqueids.uniqueids.boundary;

import com.hclc.links.uniqueids.uniqueids.control.UniqueIdsGenerator;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Stateless
@Path(value = "uniqueIds")
public class UniqueIds {

    @Inject
    UniqueIdsGenerator uniqueIdsGenerator;

    @GET
    @Produces(APPLICATION_JSON)
    public Response uniqueIds() throws InterruptedException {
        return Response.ok(uniqueIdsGenerator.getNextPortion()
                .stream()
                .collect(Json::createArrayBuilder, JsonArrayBuilder::add, JsonArrayBuilder::add)
                .build()
        ).build();
    }
}
