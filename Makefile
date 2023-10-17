.PHONY: build
build:
	@docker build -t mawlle/maxgram-frontend -f ci-cd/Dockerfile .

.PHONY: push
push:
	@docker push mawlle/maxgram-frontend
