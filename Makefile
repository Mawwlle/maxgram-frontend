VERSION := $(shell ./docker/version.sh)

.PHONY: version
version:
	@echo $(VERSION)
