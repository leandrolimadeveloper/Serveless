import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

interface IUser {
    id: string;
    name: string;
    grade: string;
    created_at: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
    const { id } = event.pathParameters;

    const response = await document
        .query({
            TableName: "users_certificate",
            KeyConditionExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id,
            },
        })
        .promise();

    const userCertificate = response.Items[0] as IUser;

    if (userCertificate) {
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Certificate is valid",
                name: userCertificate.name,
                url: `https://certificate-course-ignite-by-rocketseat.s3.amazonaws.com/${id}.pdf`,
            }),
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "Certificate not found",
        }),
    };
};
