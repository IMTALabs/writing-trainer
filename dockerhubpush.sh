#!/bin/bash
docker system prune
docker build -t tieumomo/writing-trainer .
docker push tieumomo/writing-trainer
$SHELL
