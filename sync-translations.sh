#!/bin/sh
source .env

FILENAME_REGEX='[a-z_-]+.json'

echo "Starting translation fetch"

if curl -s "$GITLAB_API_URL/$GITLAB_TRANSLATIONS_FOLDER?private_token=$GITLAB_PRIVATE_TOKEN" | grep -q "path.*${TRANSLATIONS_FOLDER}"; then
    echo "Fetching translations"

    for i in ${WEBHOOK_CODES}; do
        echo "Triggering $i"
        echo "https://api.poeditor.com/webhooks/$i"
        if ! curl -s "https://api.poeditor.com/webhooks/$i" | grep "Request received"; then
            echo "Error triggering POEditor language update for $i"
#            exit 10
        fi
    done

    echo "We are sleeping for 10 seconds to let POEditor commit available changes" && sleep 10
    echo "Downloading translations"

    TRANSLATION_FILES=`curl -s --header "Private-Token: $GITLAB_PRIVATE_TOKEN" "$GITLAB_API_URL/$GITLAB_TRANSLATIONS_FOLDER/tree?path=$TRANSLATIONS_FOLDER" | grep -o -E "$TRANSLATIONS_FOLDER/$FILENAME_REGEX"`

    for TRANSLATION in ${TRANSLATION_FILES}; do
        FILE_URL_ENCODED=`printf ${TRANSLATION} | sed s:/:%2F:`
        FILE_NAME=`printf ${TRANSLATION} | grep -o -E ${FILENAME_REGEX}`
        FILE_DOWNLOAD_PATH=src/i18n/${FILE_NAME}

        echo "Downloading $TRANSLATION to $FILE_DOWNLOAD_PATH"
        curl -s -o ${FILE_DOWNLOAD_PATH} --header "Private-Token: $GITLAB_PRIVATE_TOKEN" "$GITLAB_API_URL/$GITLAB_TRANSLATIONS_FOLDER/files/$FILE_URL_ENCODED/raw?ref=master"
    done

else
    echo "Repository not found: $GITLAB_API_URL/$GITLAB_TRANSLATIONS_FOLDER/tree"
fi
