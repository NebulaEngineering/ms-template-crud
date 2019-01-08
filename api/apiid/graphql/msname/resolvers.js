const withFilter = require("graphql-subscriptions").withFilter;
const PubSub = require("graphql-subscriptions").PubSub;
const pubsub = new PubSub();
const { of } = require("rxjs");
const { map, mergeMap, catchError } = require('rxjs/operators');
const broker = require("../../broker/BrokerFactory")();
const RoleValidator = require('../../tools/RoleValidator');
const {handleError$} = require('../../tools/GraphqlResponseTools');

const INTERNAL_SERVER_ERROR_CODE = 1;
const PERMISSION_DENIED_ERROR_CODE = 2;

function getResponseFromBackEnd$(response) {
    return of(response)
    .pipe(
        map(resp => {
            if (resp.result.code != 200) {
                const err = new Error();
                err.name = 'Error';
                err.message = resp.result.error;
                // this[Symbol()] = resp.result.error;
                Error.captureStackTrace(err, 'Error');
                throw err;
            }
            return resp.data;
        })
    );
}


module.exports = {

    //// QUERY ///////

    Query: {
        msnamecamelmsentitiespascal(root, args, context) {
            return RoleValidator.checkPermissions$(context.authToken.realm_access.roles, 'ms-'+'msnamecamel', 'msnamecamelmsentitiespascal', PERMISSION_DENIED_ERROR_CODE, 'Permission denied', ["PLATFORM-ADMIN"])
            .pipe(
                mergeMap(() =>
                    broker
                    .forwardAndGetReply$(
                        "msentitypascal",
                        "apiid.graphql.query.msnamecamelmsentitiespascal",
                        { root, args, jwt: context.encodedToken },
                        2000
                    )
                ),
                catchError(err => handleError$(err, "msnamecamelmsentitiespascal")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        },
        msnamecamelmsentitiespascalSize(root, args, context) {
            return RoleValidator.checkPermissions$(context.authToken.realm_access.roles, 'ms-'+'msnamecamel', 'msnamecamelmsentitiespascalSize', PERMISSION_DENIED_ERROR_CODE, 'Permission denied', ["PLATFORM-ADMIN"])
            .pipe(
                mergeMap(() =>
                    broker
                    .forwardAndGetReply$(
                        "msentitypascal",
                        "apiid.graphql.query.msnamecamelmsentitiespascalSize",
                        { root, args, jwt: context.encodedToken },
                        2000
                    )
                ),
                catchError(err => handleError$(err, "msnamecamelmsentitiespascalSize")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        },
        msnamecamelmsentitypascal(root, args, context) {
            return RoleValidator.checkPermissions$(context.authToken.realm_access.roles, 'ms-'+'msnamecamel', 'msnamecamelmsentitypascal', PERMISSION_DENIED_ERROR_CODE, 'Permission denied', ["PLATFORM-ADMIN"])
            .pipe(
                mergeMap(() =>
                    broker
                    .forwardAndGetReply$(
                        "msentitypascal",
                        "apiid.graphql.query.msnamecamelmsentitypascal",
                        { root, args, jwt: context.encodedToken },
                        2000
                    )
                ),
                catchError(err => handleError$(err, "msnamecamelmsentitypascal")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        }
    },

    //// MUTATIONS ///////
    Mutation: {
        msnamecamelCreatemsentitypascal(root, args, context) {
            return RoleValidator.checkPermissions$(
              context.authToken.realm_access.roles,
              "msentitypascal",
              "msnamecamelCreatemsentitypascal",
              PERMISSION_DENIED_ERROR_CODE,
              "Permission denied",
              ["PLATFORM-ADMIN"]
            )
            .pipe(
                mergeMap(() =>
                  context.broker.forwardAndGetReply$(
                    "msentitypascal",
                    "apiid.graphql.mutation.msnamecamelCreatemsentitypascal",
                    { root, args, jwt: context.encodedToken },
                    2000
                  )
                ),
                catchError(err => handleError$(err, "msnamecamelCreatemsentitypascal")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        },
        msnamecamelUpdatemsentitypascalGeneralInfo(root, args, context) {
            return RoleValidator.checkPermissions$(
              context.authToken.realm_access.roles,
              "msentitypascal",
              "msnamecamelUpdatemsentitypascalGeneralInfo",
              PERMISSION_DENIED_ERROR_CODE,
              "Permission denied",
              ["PLATFORM-ADMIN"]
            ).pipe(
                mergeMap(() =>
                  context.broker.forwardAndGetReply$(
                    "msentitypascal",
                    "apiid.graphql.mutation.msnamecamelUpdatemsentitypascalGeneralInfo",
                    { root, args, jwt: context.encodedToken },
                    2000
                  )
                ),
                catchError(err => handleError$(err, "updatemsentitypascalGeneralInfo")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        },
        msnamecamelUpdatemsentitypascalState(root, args, context) {
            return RoleValidator.checkPermissions$(
              context.authToken.realm_access.roles,
              "msentitypascal",
              "msnamecamelUpdatemsentitypascalState",
              PERMISSION_DENIED_ERROR_CODE,
              "Permission denied",
              ["PLATFORM-ADMIN"]
            ).pipe(
                mergeMap(() =>
                  context.broker.forwardAndGetReply$(
                    "msentitypascal",
                    "apiid.graphql.mutation.msnamecamelUpdatemsentitypascalState",
                    { root, args, jwt: context.encodedToken },
                    2000
                  )
                ),
                catchError(err => handleError$(err, "updatemsentitypascalState")),
                mergeMap(response => getResponseFromBackEnd$(response))
            ).toPromise();
        },
    },

    //// SUBSCRIPTIONS ///////
    Subscription: {
        msnamecamelmsentitypascalUpdatedSubscription: {
            subscribe: withFilter(
                (payload, variables, context, info) => {
                    return pubsub.asyncIterator("msnamecamelmsentitypascalUpdatedSubscription");
                },
                (payload, variables, context, info) => {
                    return true;
                }
            )
        }

    }
};



//// SUBSCRIPTIONS SOURCES ////

const eventDescriptors = [
    {
        backendEventName: 'msnamecamelmsentitypascalUpdatedSubscription',
        gqlSubscriptionName: 'msnamecamelmsentitypascalUpdatedSubscription',
        dataExtractor: (evt) => evt.data,// OPTIONAL, only use if needed
        onError: (error, descriptor) => console.log(`Error processing ${descriptor.backendEventName}`),// OPTIONAL, only use if needed
        onEvent: (evt, descriptor) => console.log(`Event of type  ${descriptor.backendEventName} arraived`),// OPTIONAL, only use if needed
    },
];


/**
 * Connects every backend event to the right GQL subscription
 */
eventDescriptors.forEach(descriptor => {
    broker
        .getMaterializedViewsUpdates$([descriptor.backendEventName])
        .subscribe(
            evt => {
                if (descriptor.onEvent) {
                    descriptor.onEvent(evt, descriptor);
                }
                const payload = {};
                payload[descriptor.gqlSubscriptionName] = descriptor.dataExtractor ? descriptor.dataExtractor(evt) : evt.data
                pubsub.publish(descriptor.gqlSubscriptionName, payload);
            },

            error => {
                if (descriptor.onError) {
                    descriptor.onError(error, descriptor);
                }
                console.error(
                    `Error listening ${descriptor.gqlSubscriptionName}`,
                    error
                );
            },

            () =>
                console.log(
                    `${descriptor.gqlSubscriptionName} listener STOPPED`
                )
        );
});


