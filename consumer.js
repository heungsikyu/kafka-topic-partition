//const Kafka = require("kafkajs").Kafka;
const { Kafka } = require("kafkajs");

run();

async function run(){
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9092"]
        });

        const consumer = kafka.consumer({
            "groupId": "test"
        });
        console.log('consumer Connecting.......');
        await consumer.connect();
        console.log("consumer Connected!!");

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        });

        await consumer.run({
            "eachMessage": async result => {
                console.log(` RVD Msg ${result.message.value} on partition ${result.partition}`  )
            }
        });

    } catch (error) {
        console.error(`Something bad happdended  ${error}`);
    }
    finally{
       
    }
}