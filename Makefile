install:
	cd frontend && npm ci

lint-frontend:
	cd frontend && npm run lint

build:
	echo "Starting build..." && cd frontend && npm run build && echo "Build complete"

start-frontend:
	cd frontend && npm run dev

start-backend: 
	npx start-server -s ./frontend/dist

develop: 
	make start-backend & make start-frontend

start:
	make start-backend