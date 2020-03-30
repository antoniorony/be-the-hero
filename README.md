# be-the-hero
Solução de Erros para o linux:
_______________________________________________________________________________________________________________

ERRO:
- erro de limite de numero de arquivos para observador.
---[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/rony/Documentos/NODEJS/omni/backend/src'

SOLUÇÃO:

sudo sysctl -w fs.inotify.max_user_watches=100000
_______________________________________________________________________________________________________________

ERRO:
---- caso a pasta esteja em modo root utilizar o comando a seguir pra alterar 

SOLUÇÃO:
 sudo chown --recursive seuUsuario ./mobile
_______________________________________________________________________________________________________________

LINK APK: https://tecinova.net/projetos/bethehero/behero%20projeto.apk
