.PHONY: dev build preview docker up down logs

dev: down docker
	docker run -d --name my-cv -p 8080:80 my-cv
	@echo ""
	@echo "  ✅ Container is running!"
	@echo "  🌐 http://localhost:8080"
	@echo ""
	docker logs -f my-cv

build:
	npm run build

preview:
	npm run preview

docker:
	docker build -t my-cv .

up: docker
	docker run -d --name my-cv -p 8080:80 my-cv

down:
	-@docker stop my-cv 2>/dev/null || true
	-@docker rm my-cv 2>/dev/null || true

logs:
	docker logs -f my-cv
