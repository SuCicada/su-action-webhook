include .env
export

SOURCES ?= $(shell find src/ -name "*.ts" -type f)
TARGET ?= $(shell find dist/ -name "*.js" -type f)

build: $(TARGET)
$(TARGET): $(SOURCES)
	yarn build

debug: build
	./act-debug.sh

precommit:
	ts-clean-built --built
	make build
