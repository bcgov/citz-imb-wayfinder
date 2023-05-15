#!/bin/bash

# Processes DeploymentConfig files to assist with deployment to OpenShift.

oc process -f /home/runner/work/citz-imb-wayfinder/citz-imb-wayfinder/OpenShift/templates/$DEPLOYMENT_CONFIG --namespace=$OPENSHIFT_NAMESPACE \
    -p OPENSHIFT_NAMESPACE=$OPENSHIFT_NAMESPACE \
    -p APPLICATION_NAME=$APPLICATION_NAME \
    -p ARTIFACTORY_URL=$ARTIFACTORY_URL \
    -p IMAGE_REPOSITORY=$IMAGE_REPOSITORY | \
    oc apply -f -
