#!/bin/bash

set -o errexit -o nounset
args=("$@")
echo Number of arguments: $#
echo 1st argument: ${args[0]}
today=$(date +%Y.%-m%d.%-H%M)
today_=$(echo $today | sed -e 's/\.//g')

if [ ${args[0]} == "staging-tag" ]
then

    git config user.name "$BITBUCKET_REPO_OWNER"
    git config user.email "$GIT_USERMAIL"
    git config remote.origin.url https://$BITBUCKET_REPO_OWNER:$GIT_PASSWORD@bitbucket.org/$BITBUCKET_REPO_OWNER/$BITBUCKET_REPO_SLUG.git

    sed -i 's/\("version": "\)[^"]*\(",\)/\1'"$today"'\2/g' package.json
    echo " - ${today} : In progress... " >> RELEASE.md
    git add -A
    git commit -m "[skip CI]"
    git push -q --tags origin master:master
    git tag "staging-$today_" $BITBUCKET_COMMIT
    git push -q --tags origin master:master
    echo "Staging tag done."
fi

if [ ${args[0]} == "staging-deploy" ]
then

    APP_NAME=$HEROKU_SAND_APP_NAME
    HEROKU_VERSION=$BITBUCKET_COMMIT

    echo "Deploying Heroku Version $HEROKU_VERSION on SandBox"

    git archive --format=tar.gz -o deploy.tgz $BITBUCKET_COMMIT

    URL_BLOB=`curl -s -n -X POST https://api.heroku.com/apps/$APP_NAME/sources \
    -H 'Accept: application/vnd.heroku+json; version=3' \
    -H "Authorization: Bearer $HEROKU_API_KEY"`

    PUT_URL=`echo $URL_BLOB | python -c 'import sys, json; print(json.load(sys.stdin)["source_blob"]["put_url"])'`
    GET_URL=`echo $URL_BLOB | python -c 'import sys, json; print(json.load(sys.stdin)["source_blob"]["get_url"])'`

    curl $PUT_URL  -X PUT -H 'Content-Type:' --data-binary @deploy.tgz

    REQ_DATA="{\"source_blob\": {\"url\":\"$GET_URL\", \"version\": \"$HEROKU_VERSION\"}}"

    BUILD_OUTPUT=`curl -s -n -X POST https://api.heroku.com/apps/$APP_NAME/builds \
    -d "$REQ_DATA" \
    -H 'Accept: application/vnd.heroku+json; version=3' \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $HEROKU_API_KEY"`

    STREAM_URL=`echo $BUILD_OUTPUT | python -c 'import sys, json; print(json.load(sys.stdin)["output_stream_url"])'`

    curl $STREAM_URL

    echo "Deploy done."

fi

if [ ${args[0]} == "production-branch" ]
then

    git config user.name "$BITBUCKET_REPO_OWNER"
    git config user.email "$GIT_USERMAIL"
    git config remote.origin.url https://$BITBUCKET_REPO_OWNER:$GIT_PASSWORD@bitbucket.org/$BITBUCKET_REPO_OWNER/$BITBUCKET_REPO_SLUG.git

    git branch -a
    #git branch production -f
    git checkout -b production
    git branch -a
    #git merge master
    git push origin production

    #TODO curl https://api.fidj.ovh/update

    echo "Production branch done."

fi
