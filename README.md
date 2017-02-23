Jieba Docker TEST
=================


$> docker build docker/ -t carter/jieba

$> docker run -it -v "$PWD/code:/nodejs/code" -p "3000:3000"  carter/jieba

$> docker ps  -a | grep Exited | awk -F' ' '{print $1}' | xargs docker rm

$> docker images | grep none | awk -F' ' '{print $3}'| xargs docker rmi
