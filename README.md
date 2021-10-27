 
**single 시스템 기준**
docker container가 있을 경우  기존 컨테이너 삭제 후 실행
### 1. zookeeper 실행 
```shell
     docker run --name zookeeper -p 2181:2181 zookeeper
```




### 2. kafka 실행 

```
docker run --name kafka -p 9092:9092 
-e KAFKA_ZOOKEEPER_CONNECT=172.17.0.1:2181 
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```

#### zookeeper의 아이피 확인이 필요한경우 아래 명령어로 확인  
---
docker inspect zookeeper 