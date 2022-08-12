# Introduccion a Git

## Registrar usuario a git
```

```
* **git config --global user.name "Nombre"**
*NO COLOCAR COMO NOMBRE DE USUARIO EL CORREO DE GITHUB* 
* **git config --global user.email "Correo@correo.com"**
*ES RECOMENDABLE UTILIZAR EL CORREO ASOCIADO A GITHUB*

## Primer Repositorio
* **git version** - Muestra version de git
* **git help** - Ayuda sobre comandos
* **git init** - Inicia un nuevo repositorio **Solo se hace 1 vez por repo**
* **git status** - Ver que archivos no han sido registrados
* **git add .** - Agrega todos los archivos para que esté pendiente de los cambios. ***Lo agrega al área temporal***
* **git commit -m "Comentario"** - Crea commit (copia del proyecto en ese momento)
* **git log** - Muestra lista de commit del mas reciente al mas antiguo

## Trucos
* **git status -s** - Muestra los archivos que no tienen seguimiento
* **git log --oneline** - Muestra en una linea los commit realizados
* **git log --oneline --decorate --all --graph** - Muestra en una linea los commit realizados pero mas bonitos uwu

Diferencias entre "--" y "-" 
-- decorate hace referencia a una palabra
-s hace referencia al comando o varios comandos, -sa serian dos comandos distintos

* **git status -s -b** - Ve informacion de la rama maestra
* **git status -sb** - Hace lo mismo que lo anterior

## Crear Alias Globales
Las alias sirve para crear atajos a comandos, se quedarán guardados en la configuración de git

* **git config --global alias.lg "log --oneline --decorate --all --graph"** 
* **git config --global -e**  

Salir del modo Vim
* q
* qa
* q!

* **git config --global -l - OnlyRead**
* **git commit -am "comando agregado"** - Realiza add . y commit al mismo tiempo
* **git commit --amend** - editar un commit

## Trucos de Vim
* **git reset --mixed IDCOMMIT** - Viajamos al comit en especifico IDCOMMIT
* **git reset --hard IDCOMMIT** - Viajamos al commit en especifico IDCOMMIT y eliminamos cambios futuros
* **git reflog** - Muestra todos los cambios incluso si borramos los commit
* **git reset --hard IDCOMMIT** - Viajamos a un commit en especifico IDCOMMIT y podemos restaurar los archivos  
* **git reset --hard** - Destruye todos los cambios sin haber realizado un commit

## Renombrar archivos
* **git mv nombreOriginal.algo nombreNuevo.algo**

## Eliminar archivos
* **git rm nombreArchivo.algo**

## Ignorar archivos
Para ignorar ciertos archivos, debemos de crear el archivo .gitignore
* archivo.js
* *.js
* carpeta/

## Ramas o branch
* **git branch nombreRama** - Crear nueva rama
* **git branch** - Muestra en que rama estamos
* **git checkout nombreRama** - Mover a la nueva rama
*  **git branch -d nombreRama** - Eliminar una rama
* **git checkout -b nuevaRama** - Crea y viaja a la nueva rama

## Tags
Con los tags se puede hacer versiones del proyecto

* **git tag versionAlpha -m "Version alpha"**
*  **git tag** - Listar tags
*  **git tag -d nombreTags** - Borrar tag
*  **git tag -a nombreTag IDCOMMIT -m "Version X"** - Hacer version de un commit anterior
*  **git show nombreTag** - Muestra informacion del tag