.PHONY: install build serve deploy clean

install:
	npm install

build:
	npm run build

serve:
	npm run dev

deploy:
	npm run deploy

clean:
	rm -rf node_modules
	rm -rf dist
