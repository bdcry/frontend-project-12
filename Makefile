install:
	cd frontend && npm ci

lint-frontend:
	cd frontend && npm run lint

build:
	rm -rf frontend/dist
	cd frontend && npm run build

start-frontend:
	cd frontend && npm run dev

start-backend: 
	npx start-server -s ./frontend/dist

develop: 
	make start-backend & make start-frontend

start:
	npx start-server -s ./frontend/dist -p $$PORT --host 0.0.0.0
