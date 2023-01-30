#!/bin/bash

echo ${WEBHOOK_URL}

act -j dev -s WEBHOOK_URL=${WEBHOOK_URL}
