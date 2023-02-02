include .env
export

SOURCES ?= $(shell find src/ -name "*.ts" -type f)
TARGET ?= 	dist/37.index.js \
			dist/index.js

build: $(TARGET)
$(TARGET): $(SOURCES)
	yarn build

act-debug: build
	./act-debug.sh

precommit:
	ts-clean-built --built
	make build
clean:
	ts-clean-built --built
	rm -rf dist/*
