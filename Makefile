build:
	cd frontend && npm run build

start-frontend:
	cd frontend && npm run dev

start-backend: 
	npx start-server -s ./frontend/dist

develop: 
	make start-frontend && make start-backend

start:
	make start-backend

install:
	npm ci && make -C frontend install