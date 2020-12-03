'use strict';
'use strict';

const AWS = require('aws-sdk');

class DynamoDB {
  constructor() {
    this.client = new AWS.DynamoDB.DocumentClient();
    this.table = 'redirectTable';
  }

  get(id) {
    return this.client.query({
      TableName: this.table,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeValues: { ':id': id },
      ExpressionAttributeNames: { '#id': 'id' }
    }).promise()
      .then((item) => {
        console.log(item.Items);
        return item.Items;
      });
  }

  put(data) {
    return this.client.put({
      TableName: this.table,
      Item: data,
    }).promise();
  }
}
const db = new DynamoDB();


module.exports.create = async event => {
  await db.put(JSON.parse(event.body));
  return {
    statusCode: 200,
    body: JSON.stringify({
      input: JSON.parse(event.body),
    },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.go = async event => {
  const [response] = await db.get(event.pathParameters.id);
  console.log(response);
  return {
    statusCode: 301,
    headers: {
      Location: response.originalUrl.toString(),
    }
  };
};

module.exports.hello = async event => {
  const db = new DynamoDB();
  db.put({ id: 'TESTCREATE', status: 'Success from hello' });
  return {
    statusCode: 301,
    headers: {
      Location: 'https://google.com',
    }
  };
};
