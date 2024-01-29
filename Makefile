.PHONY: install build serve deploy clean

install:
	npm install

build:
	npm run build

serve:
	npm run dev

deploy:
	npm run deploy

deploy-construction:
	git checkout under-construction
	npm run deploy
	git checkout main

clean:
	rm -rf node_modules
	rm -rf dist
