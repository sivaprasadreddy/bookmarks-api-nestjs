#!/bin/bash

declare project_dir=$(dirname "$0")
declare dc_app=${project_dir}/docker/docker-compose.yml
declare services="bookmarks-api-nestjs"

function start() {
    echo "Starting dependent docker containers...."
    docker-compose -f "${dc_app}" up --build --force-recreate -d ${services}
    docker-compose -f "${dc_app}" logs -f ${services}
}

function stop() {
    echo "Stopping dependent docker containers...."
    docker-compose -f "${dc_app}" stop
    docker-compose -f "${dc_app}" rm -f
}

function restart() {
    stop
    sleep 5
    start
}

action="start"

if [[ "$#" != "0"  ]]
then
    action=$*
fi

eval "${action}"
