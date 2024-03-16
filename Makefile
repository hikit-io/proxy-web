
MSG="deploy"

check:
	echo ${MSG}

deploy:
	npm run build && cp ./docs/index.html ./docs/404.html && git add . && git commit -m "${MSG}" && git push && echo 'https://proxy.hikit.io'