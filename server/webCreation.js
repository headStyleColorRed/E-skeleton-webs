
const fs = require("fs")
const shell = require('shelljs');

function createWeb(webRequirements) {
    shell.exec(`git clone ${webRequirements.git} ${webRequirements.webName}`)

    const appFile = `${webRequirements.webName}/docker-compose.yml`
    const newWeb = `version: '3.5'

services:
    ${webRequirements.webName.toLowerCase()}:
        image: nginx
        restart: always
        networks: 
        - E-skeleton
        expose:
            - "80"
        volumes:
            - ./${webRequirements.webName}:/usr/share/nginx/html:ro
        environment:
            - VIRTUAL_HOST=${webRequirements.host}, www.${webRequirements.host}
            - LETSENCRYPT_HOST=${webRequirements.host}
            - LETSENCRYPT_EMAIL=${webRequirements.email}


networks:
  E-skeleton:
    name: E-skeleton-webs`

    fs.writeFileSync(appFile, newWeb, (err) => { if (err) console.log(err); })

    shell.exec(`cd ${webRequirements.webName} && docker-compose up -d && cd ../ && rm -rf ${webRequirements.webName}`)


}

module.exports = {
    createWeb,
}