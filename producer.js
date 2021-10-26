const { Kafka } = require("kafkajs");
const msg = process.argv[2];
run();

async function run(){
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9092"]
        });

        const producer = kafka.producer();
        console.log('producer Connecting.......');
        await producer.connect();
        console.log("producer Connected!!");

        //A-M: 0, N-Z : 1
        const partition = msg[0] < "N" ? 0 : 1 ;
        const result = await producer.send({
            "topic" : "Users",
            "messages": [
                {
                    "value": msg,
                    "partition" : partition
                }
            ]
        });

        console.log(`Send ${JSON.stringify(result)} Succesfully!`);
        producer.disconnect();

    } catch (error) {
        console.error(`Something bad happdended  ${error}`);
    }
    finally{
        process.exit(0);
    }
}